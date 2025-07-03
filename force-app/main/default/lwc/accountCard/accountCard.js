import { LightningElement } from 'lwc';
import getAccount from '@salesforce/apex/AccountDAL.getAccount';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { NavigationMixin } from 'lightning/navigation';

export default class AccountCard extends LightningElement {

    account;
    isLoading = true;

    connectedCallback() {
        this.fetchAccount();
    }

    fetchAccount() {
        getAccount()
            .then(result => {              
                if (!result) {
                    this.showErrorToast({ body: { message: 'No account found' } });
                    return;
                }
                else if( result.Name === undefined || result.Rating === undefined) {
                    this.showErrorToast({ body: { message: 'Account data is incomplete'} });
                    return;
                }else(
                    this.isLoading = false,
                    console.log('Account fetched successfully:', result)
                );
                this.account = result;
                console.log(this.account.Name);
                console.log(this.account.Rating);
              
            })
            .catch(error => {
                   this.isLoading = false,
                this.showErrorToast(error);
                console.error('Error fetching account:', error);
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