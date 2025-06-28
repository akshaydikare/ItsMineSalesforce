public with sharing class AccountDAL {

    public Account getAccount(){
        Account acc = [Select Id, Name, Rating from Account limit 1];
        system.debug('Account: ' + acc);
            
        return acc;
    }
}

