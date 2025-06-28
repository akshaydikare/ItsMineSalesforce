({
    //Calling Server side method in Controller
    contactsList:function(component, event, helper){
	var action = component.get("c.conList");
        action.setParams({
            accountId: component.get("v.recordId")
        });
        action.setCallback(this, function(response){
            var state = response.getState();
            if(state === 'SUCCESS'){
               var data = response.getReturnValue();
                component.set("v.contactList", data);
            }
        })
        $A.enqueueAction(action, false);
    	},

    doRedirect : function(component, event, helper){
        var Id = event.getSource().get("v.name");
        var navEvt = $A.get("e.force:navigateToSObject");
        navEvt.setParams({
            "recordId": Id,
            "slideDevName": "detail"
        });
        navEvt.fire();
    },
    
  
})