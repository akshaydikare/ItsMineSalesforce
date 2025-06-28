public with sharing class AccountUpdateBatchJob implements  Database.Batchable<sObject>
{
    public Database.QueryLocator start(Database.BatchableContext BC)
    {
        String query = 'SELECT Id,Name, Industry, Rating, AnnualRevenue FROM Account';
       
        return Database.getQueryLocator(query);
    }
    public void execute(Database.BatchableContext BC, List<Account> scope)
    {
        for(Account a : scope)
        {
            a.Rating = 'Warm';
        }
        update scope;
    }
    public void finish(Database.BatchableContext BC) {
    }
}