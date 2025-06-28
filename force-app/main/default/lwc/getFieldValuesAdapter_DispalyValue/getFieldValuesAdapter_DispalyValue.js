import { LightningElement, wire, api } from 'lwc';
import {getRecord, getFieldValue, getFieldDisplayValue} from 'lightning/uiRecordApi'
import NAME_FIELD from '@salesforce/schema/Account.Name'
import OWNER_NAME_FIELD from '@salesforce/schema/Account.Owner.Name'
import ANNUAL_REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue'
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry'
export default class GetFieldValuesAdapter_DispalyValue extends LightningElement {
    name
    owner
    AnnualRevenue
    industry
    @api recordId
    @wire(getRecord, {recordId:'$recordId',
     fields:[NAME_FIELD, OWNER_NAME_FIELD, ANNUAL_REVENUE_FIELD,INDUSTRY_FIELD]})
     accountHandler({data}){
         if(data){
             console.log(data)
             this.name = getFieldValue(data, NAME_FIELD) 
             this.AnnualRevenue = getFieldDisplayValue(data, ANNUAL_REVENUE_FIELD) 
             this.owner = getFieldValue(data, OWNER_NAME_FIELD) 
             this.industry = getFieldValue(data, INDUSTRY_FIELD) 
             

         }
     }
}