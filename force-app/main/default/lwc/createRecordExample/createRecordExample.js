import { LightningElement, wire } from 'lwc';
import { createRecord } from "lightning/uiRecordApi";
import ACCOUNT_OBJECT from "@salesforce/schema/Account";
import NAME_FIELD from "@salesforce/schema/Account.Name";

export default class CreateRecordExample extends LightningElement {
    name;

    handleInput(event) {
      this.name = event.target.value;
    }
  
    async handleCreate() {
      const fields = {};
      // Map the user input to the fields
      fields[NAME_FIELD.fieldApiName] = this.name;
  
      // Configure your recordInput object with the object and field API names
      const recordInput = { apiName: ACCOUNT_OBJECT.objectApiName, fields };
  
      try {
        // Invoke createRecord
        const account = await createRecord(recordInput);
      } catch (error) {
        // Handle error
      }
    }

}