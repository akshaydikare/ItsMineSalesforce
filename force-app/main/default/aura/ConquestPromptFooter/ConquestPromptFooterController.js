({
    handleCancel : function(component, event, helper) {
        helper.close(component);
    },

    handleAccept : function(component, event, helper) {
        console.log('--fireConquestEvent');
        var e = $A.get("e.c:AppLevelEvent");
        console.log('CONQPROMPT RECORDID: ' + component.get("v.recordId"));
        e.setParams({ "recordId": component.get("v.recordId"), "type": component.get("v.type"), "value": true });
        e.fire();
        helper.close(component);
    },
})