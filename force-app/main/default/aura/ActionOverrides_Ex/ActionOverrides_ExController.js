({
    invoke : function(component, event, helper) {
       var params = event.getParam('arguments'); // This gives data from the calling cmp(Parent)

       var nm = params.name;
       var ct = params.city;
       component.set("v.empName", nm);
       component.set("v.empCity", ct);
        
       //ActionOverrides_Parent_Ex
       //ActionOverrides_Ex
    }
})