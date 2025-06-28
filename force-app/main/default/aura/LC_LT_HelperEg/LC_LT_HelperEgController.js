({
    gm : function(component, event, helper) {
        component.set("v.msg1", "Good Morning");
        helper.myHelper(component);
    },
    gn : function(component, event, helper) {
        component.set("v.msg1", "Good Night");
        helper.myHelper(component);
    }
})