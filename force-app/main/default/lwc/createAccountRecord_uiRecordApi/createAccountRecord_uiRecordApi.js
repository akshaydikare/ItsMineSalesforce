import { LightningElement } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import PHONE_FIELD from '@salesforce/schema/Account.Phone';
import SITE_FIELD from '@salesforce/schema/Account.Site';
export default class CreateAccountRecord_uiRecordApi extends LightningElement {
    accountId;
    formFields={}

    handleNameChange(event) {
        this.accountId = undefined;
        // this.name = event.target.value;
        // this.phone = event.target.value;
        // this.site = event.target.value;

        const {name, value} = event.target
        this.formFields[name]=value
    }
    createAccount() {
        // const fields = {};
        // fields[NAME_FIELD.fieldApiName] = this.name;
        // fields[PHONE_FIELD.fieldApiName] = this.phone;
        // fields[SITE_FIELD.fieldApiName] = this.site;
        const recordInput = { apiName: ACCOUNT_OBJECT.objectApiName, fields:this.formFields };
        createRecord(recordInput)
            .then(account => {
                this.accountId = account.id;
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Success',
                        message: 'Account created with Id '+ this.accountId,
                        variant: 'success',
                    })  
                );
                this.template.querySelector('form.resetForm').reset()
            this.formFields={}
            })
            .catch(error => {
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Error creating record',
                        message: error.body.message,
                        variant: 'error',
                    }),
                );
            });
    }
}