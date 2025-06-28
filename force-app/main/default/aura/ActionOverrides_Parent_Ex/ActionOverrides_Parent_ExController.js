({
    show : function(component, event, helper) {
       var name =  component.get("v.en");
       var city =  component.get("v.ec");

       var child = component.find('one');

       child.callMe(name, city);
    }
})