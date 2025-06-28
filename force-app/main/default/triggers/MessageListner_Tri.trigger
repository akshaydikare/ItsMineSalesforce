trigger MessageListner_Tri on Message_Event__e (after insert) {
    
    for(Message_Event__e ev : Trigger.New){
        List<Messaging.SingleEmailMessage> allmsg = new List<Messaging.SingleEmailMessage>();
        Messaging.SingleEmailMessage mail = new Messaging.SingleEmailMessage();
        List<string> toAddress = new List<string>();
        toAddress.add('akshaydikare@gmail.com');
        mail.setToAddresses(toAddress);
        mail.setSubject('Test Event Message');
        String body = ev.Description__c;
        mail.setHtmlBody(body);
        
        allmsg.add(mail);
        
        try {
            Messaging.sendEmail(allmsg,false);
            return;
        } catch (Exception e) {
            System.debug(e.getMessage());
        }
    }
    
    
    
}