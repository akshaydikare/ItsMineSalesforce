/*
 * Copyright (c) 2020, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import { LightningElement, api, track } from "lwc";

import communityId from "@salesforce/community/Id";
import { ShowToastEvent } from "lightning/platformShowToastEvent";

import getCrossSellProducts from "@salesforce/apex/B2BCrossSell.getCrossSellProducts";
import getProductPrice from "@salesforce/apex/B2BCrossSell.getProductPrice";
import addToCart from "@salesforce/apex/B2BCrossSell.addToCart";

import { NavigationMixin } from "lightning/navigation";

// Provides the path prefix to Core resources - Use for Image URL
import { getPathPrefix } from "lightning/configProvider";

// Custom Labels
import crossSell_AddToCart from "@salesforce/label/c.B2B_CS_Add_To_Cart_Button_Label";
import crossSell_Description from "@salesforce/label/c.B2B_CS_Description_Label";
import crossSell_MoreInformation from "@salesforce/label/c.B2B_CS_More_Information_Button_Label";

import cartUpdated from "@salesforce/label/c.B2B_CS_Cart_Updated";
import productAdded from "@salesforce/label/c.B2B_CS_Product_added_to_your_cart";
import errorDetected from "@salesforce/label/c.B2B_CS_Error_detected";

import BASE_PATH from "@salesforce/community/basePath";

export default class B2bCrossSell extends NavigationMixin(LightningElement) {
	// Custom Labels
	labels = {
		toast: {
			cartUpdated: cartUpdated,
			productAdded: productAdded,
			errorDetected: errorDetected
		},
		component: {
			addToCart: crossSell_AddToCart,
			description: crossSell_Description,
			moreInformation: crossSell_MoreInformation
		}
	};

	@api effectiveAccountId; // Gets or sets the effective account - if any - of the user viewing the product. @type {string}
	@api recordId; // Gets or sets the unique identifier of a product. @type {string}
	@api displayType = 'Stacked';
	@api crossSell_Title; // Gets or sets the CrossSell Title. @type {string}
	@api productType;
	@api displayImages;
	@api displayDescription; // Active or inactive the Display Description @type {string}
	@api displayQty;

	@track contactId;
	@track accountId;
	@track relatedProductUrl;

	@track isGrid = false;
	@track isStacked = false;

	//Store the webstoreID
	@track myCurrentProductPageURL;
	@track CSModifiedProducts;

	//Nb of items retrieves
	@track nbRecommendedItems;

	@track url;

	//store quantity for each elements
	@track qtyMap = new Map();

	// BUTTON "ACCORDION"
	toggleIconName = "utility:chevrondown";

	/**
	 * Gets the normalized effective account of the user.
	 *
	 * @type {string}
	 * @readonly
	 * @private
	 */
	get resolvedEffectiveAccountId() {
		const effectiveAcocuntId = this.effectiveAccountId || "";
		let resolved = null;

		if (effectiveAcocuntId.length > 0 && effectiveAcocuntId !== "000000000000000") {
			resolved = effectiveAcocuntId;
		}
		return resolved;
	}

	// Update Image URLs coming from CMS (URL or Uploaded images)
	resolve(url) {
		/**
		 * Regular expressions for CMS resources and for static B2B image resources -
		 * specifically the "no image" image - that we want to handle as though they were CMS resources.
		 */
		const cmsResourceUrlPattern = /^\/cms\//;
		const b2bStaticImageResourcePattern = /^\/img\//;
		// If the URL is a CMS URL, transform it; otherwise, leave it alone.
		if (cmsResourceUrlPattern.test(url) || b2bStaticImageResourcePattern.test(url)) {
			url = `${getPathPrefix()}${url}`;
		}

		return url;
	}

	/**
	 * Retrieve CrossSell Products on loading Page
	 */
	connectedCallback() {
		this.nbRecommendedItems = 0;
		this.getCSProducts();

		if (this.displayType === "Grid") {
			this.isStacked = false;
			this.isGrid = true;
		}
		if (this.displayType === "Stacked") {
			this.isStacked = true;
			this.isGrid = false;
		}
	}

	/**
	 * Add Quantity in map for each products
	 */
	handleQTYChange(event) {
		this.qtyMap.set(event.target.id, event.target.value);
		//window.console.log( "event.target.id: ",event.target.id," ",this.qtyMap.get(event.target.id));
	}

	/**
	 * Handles a user request to add the product to their active cart.
	 *
	 * @private
	 */
	addProductToCart(evt) {
		let qty = this.qtyMap.get(evt.target.id);
		if (!qty) qty = 1;

		console.log("add cart communityId", communityId);
		console.log("add cart productId", evt.target.id.substring(0, evt.target.id.indexOf("-")));
		console.log("add cart quantity", qty);
		console.log("add cart effectiveAccountId", this.resolvedEffectiveAccountId);

		addToCart({
			communityId: communityId,
			productId: evt.target.id.substring(0, evt.target.id.indexOf("-")),
			quantity: qty,
			effectiveAccountId: this.resolvedEffectiveAccountId
		})
			.then((result) => {
				console.log(result);
				console.log("no errors");
				this.dispatchEvent(
					new ShowToastEvent({
						title: this.labels.toast.cartUpdated,
						message: this.labels.toast.productAdded,
						variant: "success"
					})
				);

				// Refresh the cart icon
				try {
					this.dispatchEvent(
						new CustomEvent("cartchanged", {
							bubbles: true,
							composed: true
						})
					);
				} catch (err) {
					console.log("error: " + err);
				}
			})
			.catch((error) => {
				this.error = error;
				console.log("errors: " + JSON.stringify(error));

				this.dispatchEvent(
					new ShowToastEvent({
						title: this.labels.toast.errorDetected,
						message: error.message,
						variant: "error"
					})
				);
			});
	}

	/**
	 * Access the Cross Sell Product on Click.
	 */
	handleClick(evt) {
		var ctarget = evt.currentTarget;
		var fullURL = ctarget.dataset.value;
		this.relatedProductPageRef = {
			type: "standard__webPage",
			attributes: {
				url: fullURL,
				actionName: "home"
			}
		};
		this[NavigationMixin.Navigate](this.relatedProductPageRef);
	}

	//#################
	//##### NEW  ###### https://hicglobalsolutions.com/blog/lightning-web-components/
	//#################

	async getCSProducts() {
		let myCSProducts;
		let i;
		// window.console.log(" log: communityId: ", communityId);
		// window.console.log(" log: productID: ", this.recordId);
		// window.console.log(" log: effectiveAccountID: ",this.effectiveAccountId);
		try {
			const myCrossSellProducts = await getCrossSellProducts({
				communityId: communityId,
				productID: this.recordId,
				effectiveAccountID: this.effectiveAccountId === "000000000000000" ? null : this.effectiveAccountId,
				productType: this.productType
			});
			// searchForProductMetadata(String cmsContentType, String cmsContentFieldName, String matchingRecord){
			// myContent = content;

			myCSProducts = JSON.parse(JSON.stringify(myCrossSellProducts));
			// window.console.log("myCrossSellProducts:", myCSProducts);
			this.nbRecommendedItems = myCSProducts.length;

			for (i = 0; i < myCSProducts.length; i++) {
				// window.console.log("######## THE PRE ID: ");
				// window.console.log("######## THE ID: ", myCSProducts[i].id);
				// window.console.log("######## THE POST ID: ");
				let productPrice = await getProductPrice({
					communityId: communityId,
					productId: myCSProducts[i].id,
					effectiveAccountId: this.effectiveAccountId === "000000000000000" ? null : this.effectiveAccountId
				});

				if (productPrice === null) {
					productPrice = {};
					productPrice.unitPrice = null;
					productPrice.currencyIsoCode = null;
				}

				if (this.effectiveAccountId === "000000000000000") {
					myCSProducts[i].showAddToCart = false;
				} else {
					myCSProducts[i].showAddToCart = true;
				}

				// console.log('productPrice: ' + productPrice);

				// Get URL link to CrossSell Product
				myCSProducts[i].fullUrl = BASE_PATH + "/product/" + myCSProducts[i].id;

				// Get Unique Id for add to cart qty in case of two similar
				// myCSProducts[i].uniqueId = i + myCSProducts[i].id;
				// window.console.log("######## unique ID: ", myCSProducts[i].uniqueId);

				// Get Id of the
				myCSProducts[i].myId = myCSProducts[i].id;
				// window.console.log("######## My ID: ", myCSProducts[i].id);
				// window.console.log("######## My ID: ", myCSProducts[i].myId);

				// window.console.log("######## Final ID: ", myCSProducts[i].id);

				// window.console.log("$$$$$ Price Global: ", productPrice);
				// window.console.log( "$$$$$ Currenceiso value: ", productPrice.currencyIsoCode);
				// window.console.log("$$$$$ Price value: ", productPrice.unitPrice);
				// window.console.log("Name value: ", myCSProducts[i].fields.Name);
				// Get Price for this CrossSell Product
				myCSProducts[i].unitPrice = productPrice.unitPrice;
				// Get Currency for this CrossSell Product
				myCSProducts[i].currencyIsoCode = productPrice.currencyIsoCode;
				// window.console.log( "CurrencyISoCode value: ", myCSProducts[i].currencyIsoCode);
				// window.console.log("Price value: ", myCSProducts[i].unitPrice);

				// window.console.log( "SKU value: ", myCSProducts[i].fields.StockKeepingUnit);
				// window.console.log( "Image Alternative value: ",myCSProducts[i].defaultImage.alternativeText);
				
                // Get (and update) Name for this CrossSell Product
                let tempName = this.htmlDecode(myCSProducts[i].fields.Name);
				myCSProducts[i].fields.Name = tempName;

                // Get (and update) Description for this CrossSell Product
				let tempDesc = this.htmlDecode(myCSProducts[i].fields.Description);
				myCSProducts[i].fields.Description = tempDesc;

				// Get Image for this CrossSell Product
				if (myCSProducts[i].defaultImage.url != null) {
					// window.console.log("URL value: ", myCSProducts[i].defaultImage.url);
					myCSProducts[i].defaultImage.url = this.resolve(myCSProducts[i].defaultImage.url);
					// window.console.log("URL value: ", myCSProducts[i].defaultImage.url);
				}
			}
			// ### IMPORTANT REPLACE THE FOLLOWING LINE AND REMOVE AWAIT IN LOOP
			// Wait for every promise in the loop for getProductPrice
			// https://eslint.org/docs/rules/no-await-in-loop
			// this.CSModifiedProducts = await Promise.all(myCSProducts);
			this.CSModifiedProducts = myCSProducts;
		} catch (error) {
			window.console.log(error);
		}
	}

    htmlDecode(input) {
		var e = document.createElement("textarea");
		e.innerHTML = input;
		// handle case of empty input
		return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
	}

	handleTitleClick() {
		console.log("b2bCrossSell: handleTitleClick()");

		// retrieve the classList from the specific element
		const contentBlockClasslist = this.template.querySelector(".b2bcsp_content-toggle").classList;
		// toggle the hidden class
		contentBlockClasslist.toggle("slds-hidden");
		contentBlockClasslist.toggle("b2bcsp_content-toggle_hidden");

		// if the current icon-name is `utility:chevrondown` then change it to `utility:chevronright`
		if (this.toggleIconName === "utility:chevrondown") {
			this.toggleIconName = "utility:chevronright";
		} else {
			this.toggleIconName = "utility:chevrondown";
		}
	}

	/**
	 * Gets whether product information has been retrieved for display.
	 *
	 * @type {Boolean}
	 * @readonly
	 * @private
	 */
	get hasProducts() {
		return this.nbRecommendedItems !== 0;
	}

	get communityName() {
		let path = BASE_PATH;
		let pos = BASE_PATH.lastIndexOf("/s");
		if (pos >= 0) {
			path = BASE_PATH.substring(0, pos);
		}

		return path;
	}
}