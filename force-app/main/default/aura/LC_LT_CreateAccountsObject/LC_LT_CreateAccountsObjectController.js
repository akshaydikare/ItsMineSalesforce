({
	Callme : function(component, event, helper) {
		var account = component.get("v.acc");
        
        var action = component.get("c.callAccount");
        action.setParams({"acc":account});
        action.setCallback(this, function(response){
           var state = response.getState();
            if(state == 'SUCCESS'){
                var res = response.getReturnValue();
                console.log(res);
            }
        });
        $A.enqueueAction(action);
	}
})