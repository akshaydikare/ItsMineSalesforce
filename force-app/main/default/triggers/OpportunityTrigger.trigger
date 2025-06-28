trigger OpportunityTrigger on Opportunity (after update , after insert) {
    if(trigger.isBefore){
        if(trigger.isInsert){
            //OpportunityTriggerHandler.PrefilledFileds(Trigger.new);
        }
    }
    
    if(Trigger.isAfter){
        if(Trigger.isUpdate){
            //OpportunityTriggerHandler.ClosedOpportunityTrigger(trigger.new);
            //OpportunityTriggerHandler.ClosedOpportunityTrigger(trigger.new);
        }
        if(Trigger.isInsert){
            //OpportunityTriggerHandler.ClosedOpportunityTrigger(trigger.new);
            
           OpportunityTriggerHandler.updateCountOnAccounts(trigger.new);
            
        }
    }
}