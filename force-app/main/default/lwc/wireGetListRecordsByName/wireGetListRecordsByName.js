import { LightningElement, wire } from "lwc";
import { getListRecordsByName } from "lightning/uiListsApi";
import ACCOUNT_OBJECT from "@salesforce/schema/Account";
export default class WireGetListRecordsByName extends LightningElement {
    error;
    records;
  
    @wire(getListRecordsByName, {
      objectApiName: ACCOUNT_OBJECT.objectApiName,
      listViewApiName: "MyListView",
      fields: ["Account.Id", "Account.Name"],
      sortBy: ["Account.Name"],
      pageSize: 10,
      pageToken: "$pageToken",
    })
    listRecords({ error, data }) {
      if (data) {
        this.records = data.records;
        console.log(JSON.stringify(data.records));
        this.nextPageToken = data?.nextPageToken;
        this.error = undefined;
      } else if (error) {
        this.error = error;
      }
    }

    handleNextPage(event) {
        event.stopPropagation();
        if (this.nextPageToken) {
          this.pageToken = this.nextPageToken;
        }
      }
}