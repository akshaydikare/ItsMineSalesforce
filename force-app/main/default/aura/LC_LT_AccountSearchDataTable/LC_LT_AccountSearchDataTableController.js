({
    loadColumns : function(component, event, helper) {
        var myCols =[
            {label:"Account Name", fieldName:"Name", type:"Text"},
            {label:"Account Phone", fieldName:"Phone", type:"Text"},
            {label:"Account Industry", fieldName:"Industry", type:"Text"},
            {label:"Account Rating", fieldName:"Rating", type:"Text"},
            {label:"Account Number", fieldName:"AccountNumber", type:"Text"}
        ]     
        component.set("v.columns", myCols);
        },
    
    
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