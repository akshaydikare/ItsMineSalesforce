({
	callCreateFinancialPlanService: function (component, helper, event) {   
        var recordId = component.get("v.recordId");       
        var eventrecordId = event.getParam("recordId");
        console.log('EVENT PRMS RECID: ' + eventrecordId); 
        console.log('DOES ' + eventrecordId + '==' + recordId + ' ?');  
    },


    handleCreatePlanClick: function(cmp, event, helper) {
            helper.promptFinancialPlanConfirm(cmp, helper, event, 'Warning', 'Are you sure you want to create a financial plan for this person?', 'callCreateFinancialPlanService');   
    },    

    promptFinancialPlanConfirm: function (component, helper,event, title, message, type) {
        if(event.getParam("recordId") != null || event.getParam("recordId") != undefined ){
            $A.createComponent(
            "c:ConquestPrompt",
            {
                "title": title,
                "message": message,
                "type": type,
                "recordId": event.getParam("recordId")
            },
            function (cmp, status, errorMessage) {
                console.log('errorMessage:' + errorMessage);
            }
        )  
        }
        else{
           $A.createComponent(
            "c:ConquestPrompt",
            {
                "title": title,
                "message": message,
                "type": type,
                "recordId": component.get("v.recordId")
            },
            function (cmp, status, errorMessage) {
                console.log('errorMessage:' + errorMessage);
            }
        ) 
        }
    }
});