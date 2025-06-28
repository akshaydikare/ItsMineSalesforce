({
	searchMe : function(component, event, helper) {
		var searchTxt = component.get("v.st");
        var action = component.get("c.getAccounts");
        action.setParams({"searchText":searchTxt});
        
        action.setCallback(this, function(response){
            var state = response.getState();
            if(state == 'SUCCESS'){
                var result = response.getReturnValue();
                 component.set("v.acc", result);
            }
        });
        $A.enqueueAction(action);
	}
})