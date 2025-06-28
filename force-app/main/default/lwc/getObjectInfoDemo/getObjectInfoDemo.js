import { LightningElement, wire } from 'lwc';
import {getObjectInfo, getObjectInfos} from 'lightning/uiObjectInfoApi'
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
import CONTACT_OBJECT from '@salesforce/schema/Contact'
import OPPORTUNITY_OBJECT from '@salesforce/schema/Opportunity'
export default class GetObjectInfoDemo extends LightningElement {
    //defaultRecordType
    @wire(getObjectInfo, {objectApiName:ACCOUNT_OBJECT})
    objectInfoproperty
//---------------------------------------------------------------------------------
objectInfo
    @wire(getObjectInfo, {objectApiName:CONTACT_OBJECT})
     objectInfo({data, error}){
        if(data){
            console.log(data);
            this.objectInfo = data
        }
        if(error){
            console.log('Not Ok');
        }
    }
//---------------------------------------------------------------------------------

    objectApiNames = [ACCOUNT_OBJECT, OPPORTUNITY_OBJECT,CONTACT_OBJECT]

    objectInfos
    @wire(getObjectInfos, { objectApiNames: '$objectApiNames' })
    objectInfosHandler({data}){
        if(data){
            console.log(data)
            this.objectInfos = data
        }
    }
    //---------------------------------------------------------------------------------

}