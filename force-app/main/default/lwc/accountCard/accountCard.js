import { LightningElement } from 'lwc';
import '@salesforce/apex/AccountDAL.getAccount';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { NavigationMixin } from 'lightning/navigation';

export default class AccountCard extends LightningElement {

    account;

    connectedCallback() {
        this.fetchAccount();
    }

    fetchAccount() {
        getAccount()
            .then(result => {
                this.account = result;
            })
            .catch(error => {
                this.showErrorToast(error);
            });
    }

    showErrorToast(error) {
        const evt = new ShowToastEvent({
            title: 'Error loading account',
            message: error.body.message,
            variant: 'error'
        });
        this.dispatchEvent(evt);
    }
}