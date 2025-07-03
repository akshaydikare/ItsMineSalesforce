public with sharing class AccountDAL {

    @AuraEnabled(cacheable=true)
    public static Account getAccount(){
        Account acc = [Select Id, Name, Rating from Account WHERE ID = '001Hp00002f3epXIAQ'];
        system.debug('Account: ' + acc);
            
        return acc;
    }
}

