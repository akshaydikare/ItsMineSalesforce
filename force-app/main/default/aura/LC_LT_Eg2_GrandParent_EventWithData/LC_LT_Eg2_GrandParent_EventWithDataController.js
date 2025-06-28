({
    gpMe : function(component, event, helper) {
        var name = event.getParam("empName");
        alert('Event handled by GrandParent: EmpName: '+name);
    }
})