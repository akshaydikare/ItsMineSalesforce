import { LightningElement, wire } from 'lwc';
import { getListInfoByName } from "lightning/uiListsApi"; //fetch only metadata
import ACCOUNT_OBJECT from "@salesforce/schema/Account";

export default class GetListInfoByName extends LightningElement {
    error;
    displayColumns;
    @wire(getListInfoByName, {objectApiName: ACCOUNT_OBJECT.objectApiName, listViewApiName: "MyListView"})
    listInfo({ error,  data}) {
      if (data) {
        console.log('MyListView : Cols: ' + JSON.stringify(data.displayColumns));
        this.displayColumns = data.displayColumns;
        console.log('Editable?: ' + JSON.stringify(data.displayColumns[0].inlineEditAttributes));

        this.error = undefined;
      } else if (error) {
        this.error = error;
        this.displayColumns = undefined;
      }
    }
}