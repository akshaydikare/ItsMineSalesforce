trigger AccountAddressUpdateTrigger on Account (before insert, before update) {
    if(Trigger.isInsert){
        if(Trigger.isBefore){

            AccountTriggerHandler.copyBillingToShipping(Trigger.New);
        }

    }
    if(Trigger.isUpdate){
        if(Trigger.isBefore){

            AccountTriggerHandler.copyBillingToShipping(Trigger.New);
        }

    }
}