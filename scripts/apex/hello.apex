// Use .apex files to store anonymous Apex.
// You can execute anonymous Apex in VS Code by selecting the
//     apex text and running the command:
//     SFDX: Execute Anonymous Apex with Currently Selected Text
// You can also execute the entire file by running the command:
//     SFDX: Execute Anonymous Apex with Editor Contents

// Query for 25 accounts: Batch call handler
//String q = 'SELECT Industry FROM Account LIMIT 25';
//String e = 'Account';
//String f = 'Industry';
//String v = 'Consulting';
//Id batchInstanceId = Database.executeBatch(new UpdateAccountFields(q,e,f,v), 5);

AccountDAL getAccount = new AccountDAL();
getAccount.getAccount();

System.debug(System.UserInfo.getUserName() + ' is executing the code in hello.apex' + ' at ' + System.now());

System.debug(System.UserInfo.getOrganizationId() + ' is the Org ID of the org where this code is executing');

System.debug(System.UserInfo.getUserId() + ' is the User ID of the user executing this code');
System.debug(System.UserInfo.getSessionId() + ' is the Session ID of the user executing this code');    
System.debug(System.UserInfo.getUserType() + ' is the User Type of the user executing this code');
System.debug(System.UserInfo.getProfileId() + ' is the Profile ID of the user executing this code');    

System.debug(System.UserInfo.getTimeZone() + ' is the Time Zone of the user executing this code');
System.debug(System.UserInfo.getUiTheme() + ' is the UI Theme of the user executing this code');
System.debug(System.UserInfo.getUiThemeDisplayed() + ' is the UI Theme Displayed of the user executing this code');
System.debug(System.UserInfo.getOrganizationName() + ' is the Organization Name of the org where this code is executing');

System.debug(System.UserInfo.getUserEmail() + ' is the User Email of the user executing this code');
