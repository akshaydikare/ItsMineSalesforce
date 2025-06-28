import { LightningElement, wire,track} from 'lwc';
import allAccounts from '@salesforce/apex/GetAllCases.getAllAccounts'
import findContacts from '@salesforce/apex/GetAllCases.findContacts'
import getContactList from '@salesforce/apex/GetAllCases.getContactList'
export default class ImparativeCallApex extends LightningElement {
accounts;   
@track contactList;
@track error;
searchKey = '';
contacts;
error;
timer;
    fetchAccount(){
        allAccounts().then(result=>{
            console.log(result)
            this.accounts=result
        }).catch(error => {
            console.log('Errorrrrr', error);
        })
    }

    handleLoad() {
        getContactList()
            .then(result => {
                this.contactList = result;
            })
            .catch(error => {
                this.error = error;
            });
    }

    // handleKeyChange(event) {
    //     this.searchKey = event.target.value;
    // }

    handleSearch(event) {
        window.clearTimeout(this.timer);
        this.searchKey = event.target.value;
       this.timer = setTimeout(()=>{this.callContacts()}, 2000)
    } 

    callContacts(){
        findContacts({ searchKey: this.searchKey })
        .then(result => {
            this.contacts = result;
            this.error = undefined;
        })
        .catch(error => {
            this.error = error;
            this.contacts = undefined;
        });
    }
}