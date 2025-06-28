trigger case_au on Case (before Update) {
    
    //Publishing the event. We need a listner to lisen this.
	//Description__c	
	Message_Event__e evt = new Message_Event__e();
    evt.Description__c = 'This is first Message';
    EventBus.publish(evt);
    
    Message_Event__e evt2 = new Message_Event__e();
    evt2.Description__c = 'This is second Message';
    EventBus.publish(evt2);   
}