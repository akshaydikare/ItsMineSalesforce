@RestResource(urlMapping='/Accounts/*/contacts')
global with sharing class AccountManager {
	@HttpGet
    global static Account getAccount(){
         RestRequest request = RestContext.request;
        String accountId = request.requestURI.substringBetween('Accounts/','/contacts');
        Account acc = [Select Id, Name, Rating, (Select Id, FirstName, LastName from contacts)
                       from Account
                       		where ID = :accountId];
        system.debug('Account: ' + acc);
        if (acc == null) {
            RestResponse response = RestContext.response;
            response.statusCode = 404;
            response.responseBody = Blob.valueOf('Account not found');
            return null;
        }
            
        return acc;
    }
}