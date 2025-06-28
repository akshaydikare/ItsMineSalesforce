({
	invoke : function(component, event, helper) {
		var amount = component.get("v.amount");
        var rate = component.get("v.rate");
        var years = component.get("v.years");
        
        var intrest = (amount * rate * years)/100;
         component.set("v.intrest", intrest);
        
	}
})