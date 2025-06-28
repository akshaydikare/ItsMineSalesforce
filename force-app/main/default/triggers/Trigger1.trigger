trigger Trigger1 on Account (before update, after update,before insert, after insert, before delete, after delete, after undelete)
{
    if (trigger.isBefore && trigger.isUpdate)
    {
        System.debug('Event : ' + Trigger.operationType);
        System.debug('This is Before Update Event');
        AccountTriggerHandlerB4.OnBeforeUpdate(Trigger.new,Trigger.OldMap);
    }
    if (trigger.isAfter && trigger.isUpdate)
    {
        System.debug('Event : ' + Trigger.operationType);
        System.debug('This is After Update Event');
    }
    if (trigger.isBefore && trigger.isInsert)
    {
        System.debug('Event : ' + Trigger.operationType);
        System.debug('This is Before Insert Event');
        AccountTriggerHandlerB4.ValidateAccType(Trigger.new);
        AccountTriggerHandlerB4.OnBeforeInsert(Trigger.new);
        AccountTriggerHandlerB4.UpdateAccount(Trigger.new);
    }
    if (trigger.isAfter && trigger.isInsert)
    {
        System.debug('Event : ' + Trigger.operationType);
        System.debug('This is After Insert Event');
        AccountTriggerHandlerB4.OnAfterInsert(Trigger.New,Trigger.OldMap);
        AccountTriggerHandlerB4.CreateConforAcc(Trigger.New);
    }
    if (trigger.isBefore && trigger.isDelete)
    {
        System.debug('Event : ' + Trigger.operationType);
        System.debug('This is Before Delete Event');
        AccountTriggerHandlerB4.deleteRelatedContact(Trigger.OldMap);
    }
    if (trigger.isAfter && trigger.isDelete)
    {
        System.debug('Event : ' + Trigger.operationType);
        System.debug('This is After Delete Event');
    }
    if (trigger.isAfter && trigger.isUnDelete)
    {
        System.debug('Event : ' + Trigger.operationType);
        System.debug('This is After UnDelete Event');
    }
}