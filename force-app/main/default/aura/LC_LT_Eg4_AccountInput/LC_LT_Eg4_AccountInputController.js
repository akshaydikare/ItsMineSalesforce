({
    callMe : function(component, event, helper) {
        var acc = component.get("v.newAcc");
        var action= component.get("c.InsetAccount");
        action.setParams({"acc":acc});
        action.setCallback(this, function(response){
            var state = response.getState();
            console.log(state);
            if(state === 'SUCCESS')
            {
                //var resId = response.getReturnValue();
                var res = response.getReturnValue();
                
                if(res != 'failed'){            
                var evt = component.getEvent("akshay");
                    evt.fire();
                //evt.setParams({"aid":resId});  
                }
                else{
                    alert('Account creation failed');
                }
            }
        });
        
        $A.enqueueAction(action);
    },
    
    clearMe : function(component, event, helper) {
        component.set("v.newAcc", "");
    }
})