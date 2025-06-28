public class UpdateAccountFields implements Database.Batchable<sObject>{
    public final String Query;
    public final String Entity;
    public final String Field;
    public final String Value;
 
    public UpdateAccountFields(String q, String e, String f, String v){
            Query=q; Entity=e; Field=f;Value=v;
    }
 
    public Database.QueryLocator start(Database.BatchableContext bc){
       return Database.getQueryLocator(query);
    }
 
    public void execute(Database.BatchableContext bc, List<sObject> scope){
       for(Sobject s : scope)
       {
            s.put(Field,Value); 
       }      
       update scope;
    }
 
    public void finish(Database.BatchableContext bc){
 		system.debug('Job run finished');
    }
 /*// Query for 10 accounts
String q = 'SELECT Industry FROM Account LIMIT 10';
String e = 'Account';
String f = 'Industry';
String v = 'Consulting';
Id batchInstanceId = Database.executeBatch(new UpdateAccountFields(q,e,f,v), 5); */
 }