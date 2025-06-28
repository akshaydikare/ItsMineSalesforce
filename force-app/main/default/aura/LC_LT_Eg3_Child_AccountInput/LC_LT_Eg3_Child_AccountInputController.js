({
	callMe : function(component, event, helper) {
		var newAccount = component.get("v.newAcc");
        
        var myEvt = component.getEvent("akshay");
        
        myEvt.setParams({"acc":newAccount});
        myEvt.fire();
	},
    
    clearMe : function(component, event, helper) {

	}
})