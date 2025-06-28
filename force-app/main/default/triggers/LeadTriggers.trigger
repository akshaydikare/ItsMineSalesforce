trigger LeadTriggers on Lead (before insert, after insert, before update) {
    if(trigger.isBefore && trigger.isInsert){
        LeadTriggerHandler.LeadValidationExample(trigger.new);
    }
    if(trigger.isAfter && trigger.isInsert){
        LeadTriggerHandler.sendEmailOnLeadCreation(trigger.new);
    }

    if(trigger.isBefore && (trigger.isInsert || trigger.isUpdate))
    {       
        LeadTriggerHandler.AutoPopulateRevenue(trigger.new);
        
    }
    if( trigger.isBefore && trigger.isUpdate){
        LeadTriggerHandler.CheckEmailDuplicationWithContact(trigger.new, trigger.oldMap);
    }
}