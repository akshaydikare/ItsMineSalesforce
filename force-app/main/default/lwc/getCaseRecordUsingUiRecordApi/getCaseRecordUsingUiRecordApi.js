import { LightningElement,wire,api} from 'lwc';
import {getRecord, getFieldValue,getFieldDisplayValue} from 'lightning/uiRecordApi'
import CASE_OBJECT from '@salesforce/schema/Case'
import CASE_NUMBER from '@salesforce/schema/Case.CaseNumber'
import CASE_REASON from '@salesforce/schema/Case.Reason'
import CASE_ORIGIN from '@salesforce/schema/Case.Origin'
import CASE_CLOSEDDATE from '@salesforce/schema/Case.ClosedDate'
import CASE_TYPE from '@salesforce/schema/Case.Type'
export default class GetCaseRecordUsingUiRecordApi extends LightningElement {
@api recordId;
caseNumber;
caseReason;
caseOrigin;
caseClosedDate;
caseType;
    @wire(getRecord, {recordId:'$recordId', fields:[CASE_NUMBER, CASE_REASON, CASE_ORIGIN, CASE_CLOSEDDATE,CASE_TYPE]})
    //@wire(getRecord, {recordId:'$recordId', layoutTypes:['Full'], modes:["View"]})
    CaseHandler({data,error}){
        if(data){
            // this.caseNumber = data.fields.CaseNumber.displayValue ? data.fields.CaseNumber.displayValue : data.fields.CaseNumber.value
            // this.caseReason = data.fields.Reason.displayValue ? data.fields.Reason.displayValue : data.fields.Reason.value
            // this.caseOrigin = data.fields.Origin.displayValue ? data.fields.Origin.displayValue : data.fields.Origin.value
            // this.caseClosedDate = data.fields.ClosedDate.displayValue ? data.fields.ClosedDate.displayValue : data.fields.ClosedDate.value

            this.caseNumber = getFieldValue(data, CASE_NUMBER);
            this.caseReason = getFieldValue(data,CASE_REASON);
            this.caseOrigin = getFieldValue(data,CASE_ORIGIN);
            this.caseClosedDate = getFieldDisplayValue(data,CASE_CLOSEDDATE);   
            this.caseType = getFieldValue(data,CASE_TYPE);   
        }
        if(error){
            console.log(error);
        }
    }
}