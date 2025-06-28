import { LightningElement, wire } from 'lwc';
import {getObjectInfo} from 'lightning/uiObjectInfoApi'
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
import ID from '@salesforce/user/Id'
export default class GetObjectInfoApiWireAdapter extends LightningElement {
UserId = ID;
childRelationships;
@wire(getObjectInfo, {objectApiName:ACCOUNT_OBJECT}) 
getObjInfo({data, error}){
    if(data){
        console.log(data);
        this.childRelationships = data.childRelationships;
    }
    if(error){
        console.log('Erroror', error);
    }
}

}