({ 
    callMe: function(component, event, helper) {
        var acc = component.get("v.newAcc");
        var action = component.get("c.InsertAccount");
        action.setParams({"acc": acc});
        action.setCallback(this, function(response){
            console.log(response);
            var state = response.getState();
            
            if(state === 'SUCCESS'){
                //var resId = response.getReturnValue();
                var resId = response.getReturnValue();
                if(resId != 'failed'){
                    var evt = component.getEvent('akshay');
                    evt.fire();
                }
                else{
                    alert('Account creation failed');
                }

            }
        });
        $A.enqueueAction(action);
    },
    clearMe: function(component, event, helper) {
        //component.set("v.newAcc", null);    
    }
})