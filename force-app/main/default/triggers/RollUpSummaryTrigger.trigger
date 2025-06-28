trigger RollUpSummaryTrigger on Contact (after insert, after update, after delete, after undelete) 
{
    set<ID> idSet =new set<ID>();
    if(trigger.isInsert || trigger.isUpdate || trigger.isUndelete)
    {
        for(contact con:trigger.new)
        {
            if(con.accountid != NULL)
            {
                idSet.add(Con.accountid);
            }
        }
    }
    
    if(trigger.isUpdate || trigger.isDelete)
    {
        for(contact con:trigger.old)
        {
            if(con.accountid != NULL)
            {
                idSet.add(Con.accountid);
            }
        }    
    }
    
    if(idset.size()>0)
    {
        List<Account>accList=[SELECT id, Number__c, (SELECT id FROM Contacts) FROM Account Where ID IN:idset];
        if(accList.size()>0)
        {
            for (Account acc: accList)
            {
                acc.Number__c=acc.contacts.size();
            }
            update accList;
        }
    }
}