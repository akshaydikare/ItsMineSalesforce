({
    callMe : function(component, event, helper) {
        component.set('v.columns', [
            {label:"FirstName", fieldName:"FirstName", type:"text"},
            {label:"LastName", fieldName:"LastName", type:"text"},  
            {label:"Email", fieldName:"Email", type:"text"},
        ]);
            
            var accId= event.getParam("accID");
            
            var action = component.get("c.getContacts");
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