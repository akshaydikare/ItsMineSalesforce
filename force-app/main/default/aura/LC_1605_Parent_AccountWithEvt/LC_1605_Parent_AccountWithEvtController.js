({
    loadColumns : function(component, event, helper) {
        var col = [{label:"Account Name", fieldName:'Name', type:'text'},
        {label:"Account Phone", fieldName:'Phone', type:'text'},
        {label:"Account Rating", fieldName:'Rating', type:'text'}];
component.set("v.columns", col);
    },
    showMe : function(component, event, helper) {

       var action = component.get("c.getAccountList");
       //get the param from event and set Param if you want to pass the Account Id from the event.
       //var accId = event.getParams({"aid"});
        //action.setParams({"accID":accID})

        action.setCallback(this, function(response){
            var state = response.getState();

            if(state =='SUCCESS'){
                var result = response.getReturnValue();
                component.set("v.accounts",result)
            }
        });
        $A.enqueueAction(action);

        // var acc= event.getParam("acc");
        // var accounts = component.get("v.accounts"); //To Ratain existing data --Pull the existing data
        //  accounts.push(acc);							//Add/Push data received from the event.
        //  component.set("v.accounts", accounts);		
    }
})