({
    callMe : function(component, event, helper) {
        var name=component.get("v.nm");
        var evt = component.getEvent("second");
        evt.setParams({"empName":name});
        evt.fire();
    },
    
    childMe : function(component, event, helper) {
        var name = event.getParam("empName");
        alert('component itself handled the event: '+name);
    }
})