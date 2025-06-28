({
    /*doInit : function(component, event, helper) {
        console.log('IN CONQUEST CONTROLLER');
        helper.doInit(component, event, helper);
    },*/

    handleCreatePlanClick: function(cmp, event, helper) {
        helper.handleCreatePlanClick(cmp, event, helper);
    },

    handleConquestEvent: function (component, event, helper) {
        console.log('CONQUEST EVENT CALLBACK');
        console.log('CONQUEST COMPONENT: ' + component);
        var eventType = event.getParam("type");
        var recordId = event.getParam("recordId");
        console.log('EVTYPE: ' + eventType);
        
        console.log('RECORD: ' + recordId);
        helper[eventType](component, helper, event);
    }    
})