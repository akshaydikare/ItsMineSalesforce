({
    /*5packItem : function(component, event, helper) {
		component.set("v.item.Packed__c", true);
        event.getSource().set("v.disabled", true);
	},*/
    
    /*createRecord : function (component, event, helper) {
        var navEvt = $A.get("e.force:navigateToSObject");
        navEvt.setParams({
            "recordId": "0015j00000WFirkAAD"
        });
        navEvt.fire();
    }*/
    showToastMessage : function (component, event, helper) {
    var toastEvent = $A.get("e.force:showToast");
    toastEvent.setParams({
    "title": "Success!",
    "message": " Your contacts have been loaded successfully."
	});
}
})