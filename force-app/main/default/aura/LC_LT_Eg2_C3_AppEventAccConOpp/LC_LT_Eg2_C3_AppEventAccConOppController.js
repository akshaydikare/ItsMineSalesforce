({
    callMe : function(component, event, helper) {
        component.set('v.columns', [
            {label:"Name", fieldName:"Name", type:"text"},
            {label:"StageName", fieldName:"StageName", type:"text"},  
            {label:"Amount", fieldName:"Amount", type:"currency"},
        ]);
            
            var accId= event.getParam("accID");
            
            var action = component.get("c.getOpty");
            action.setParams({"accId":accId});
            action.setCallback(this, function(data){
            var state = data.getState();
            
            if(state == 'SUCCESS'){
            var res = data.getReturnValue();
            component.set("v.data", res);
            component.set("v.flag", true);
            }

            });
            $A.enqueueAction(action);
            }
            
            })