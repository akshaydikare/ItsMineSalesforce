({
    loadColumns : function(component, event, helper) {
        
        var col = [{label:"Account Name", fieldName:'Name', type:'text'},
                   {label:"Account Phone", fieldName:'Phone', type:'text'},
                   {label:"Account Rating", fieldName:'Rating', type:'text'}];
        component.set("v.columns", col);
        
    },
    
    showMe : function(component, event, helper) {
        var action = component.get("c.getAccList"); 
        //var acc = event.getParam("aid");
        //action.setParams({"aid":acc});
        action.setCallback(this, function(response){
            var state = response.getState();
            if(state = 'SUCCESS'){
                var result = response.getReturnValue();
                component.set("v.accounts", result);
            }
        });  
        $A.enqueueAction(action);
    }
})