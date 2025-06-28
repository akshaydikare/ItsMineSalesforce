import { LightningElement } from 'lwc';
import hasViewAllData from '@salesforce/userPermission/ViewAllData'
import hasNewReportBuilder from '@salesforce/userPermission/NewReportBuilder'
import myCustomPermission from '@salesforce/customPermission/show_details'

 
export default class CheckPermissionDemo extends LightningElement {

    get hasViewAllDataAvialable(){ 
        return hasViewAllData 
    }

    get hasNewReportBuilderAvialable(){ 
        return hasNewReportBuilder 
    }
    get hasCustomPermission(){ 
        return myCustomPermission
    }
}