({
	callMe : function(component, event, helper) {
        var evt = component.getEvent("first");
        evt.fire();
	}
})