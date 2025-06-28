trigger PaymentOrderTrigger on Payment_Order__c (before insert, before update) {
    if(Trigger.isBefore){
        if(Trigger.isInsert){
            PaymentOrderTriggerHandler.populateFieldsOnInsert(Trigger.New);
        }
        else if(Trigger.isUpdate){
            PaymentOrderTriggerHandler.mapAccountOnUpdate(Trigger.New);
        }
    }
}