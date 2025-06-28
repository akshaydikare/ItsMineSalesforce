({
    searchMe : function(component, event, helper) {  
        var aName = component.get("v.accName");
        var aInd = component.get("v.accIndustry");
        
        var action = component.get("c.searchAccount");
        action.setParams({"accName":aName, "accInd":aInd});
        action.setCallback(this, function(response){
            var state = response.getState();
            if(state == 'SUCCESS'){
                var res = response.getReturnValue();
                if(res != 'Error'){
                    var evt = $A.get("e.c:LE_LT_Eg2_AppEventAccConOpp");
                    evt.setParams({"accID":res});
                    evt.fire();
                }
                else{
                    alert('Account Not Found');
                }
            }
        });
        $A.enqueueAction(action);
    }
})