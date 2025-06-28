import { LightningElement,api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import ACCOUNT_REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue';
import TYPE_FIELD from '@salesforce/schema/Account.Type';
import RATING_FIELD from '@salesforce/schema/Account.Rating';
import WEBSITE_FIELD from '@salesforce/schema/Account.Website';
import FAX_FIELD from '@salesforce/schema/Account.Fax';

export default class RecordFormDemo extends LightningElement {

    @api recordId
    @api objectApiName
    objectName = ACCOUNT_OBJECT
    fieldList = [NAME_FIELD,INDUSTRY_FIELD,ACCOUNT_REVENUE_FIELD,TYPE_FIELD,RATING_FIELD,WEBSITE_FIELD,FAX_FIELD]

    onSuccessHandler(event){
       console.log( event.detail.id);
       const toastEvent = new ShowToastEvent({
           title:"Account created",
           message:"Record Id: " + event.detail.id,
           variant:"success"
       })

       this.dispatchEvent(toastEvent);
    }
}