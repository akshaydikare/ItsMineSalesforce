import { LightningElement, wire } from 'lwc';
import filterAccountByType from '@salesforce/apex/AccountController_ApexInLWC.filterAccountByType'
export default class WireApexWithParams extends LightningElement {
    selectedType=''
    @wire(filterAccountByType, {type:'$selectedType'})
    filteredAccounts

    get typeOptions(){
        return [
            {label:"Customer - Channel", value:"Customer - Channel"},
            {label:"Customer - Direct", value:"Customer - Direct"},
            {label:"Other", value:"Other"},
            {label:"Prospect", value:"Prospect"}
        ]
    }
    typeHandler(event){
        this.selectedType = event.target.value
    }
}