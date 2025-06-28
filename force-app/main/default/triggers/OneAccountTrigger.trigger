trigger OneAccountTrigger on Account (before insert) {
    System.debug('Trigger: Before insert!');
    if(Trigger.isInsert){
        if(Trigger.isBefore){
            OneAccountTriggerHandler.beforeInsert(Trigger.New);
        }else if(Trigger.isAfter){
            //Call After Insert method
        }        
    }
}