({
    callMe : function(component, event, helper) {
        var evt = component.getEvent('second');
        var nam = component.get("v.nm");
        evt.setParams({"empName": nam});
        evt.fire();
    }
})