@isTest
private class AccountManagerTest {

    @isTest
    static void testAccountRecord(){
       Account newAcc = new Account(Name='NewTest WebService');
        insert newacc;
        system.debug(newacc);
         Contact newContact = new Contact(AccountId=newAcc.id, FirstName='Apex', LastName='WebService');
        insert newContact;
        system.debug(newContact);
        RestRequest request = new RestRequest();
        request.requestUri = 'https://yourInstance.salesforce.com/Services/apexrest/Accounts/'+newAcc.Id+'/contacts';
         request.httpMethod = 'GET';
        RestContext.request = request;
        
        Account myAcct = AccountManager.getAccount();
        system.assert(myAcct != null);
        system.assertEquals('NewTest WebService', myAcct.Name);
 
    }
}