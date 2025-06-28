trigger Contact_Example on Contact (before insert, after insert) {
    //List<Contact> contacts= trigger.new;
    if(trigger.isInsert && trigger.isBefore){
        Account_trigger_Handler.beforeinsert(trigger.new);
         List<Contact> cons = Trigger.new;
        ContactTriggerHandler.checkAccount(cons);
    }  
   

    if(trigger.isInsert && trigger.isAfter){
        ContactTriggerHandler.updateAccountsPhone(trigger.new);

        Map<id,contact> IdContactMap=new Map<Id,contact>();
        for(Contact con:trigger.new){
            if(con.email!=Null){
                IdContactMap.put(con.id,con);
            }
        }
        if(IdContactMap.size() > 0){
            database.executeBatch(new MailToNewContact(IdContactMap)); // Calling batch class.
        }
    }
   }