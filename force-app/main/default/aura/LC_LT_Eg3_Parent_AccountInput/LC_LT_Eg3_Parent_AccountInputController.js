({
    loadColumns : function(component, event, helper) {
        
        var col = [{label:"Account Name", fieldName:'Name', type:'text'},
                  {label:"Account Phone", fieldName:'Phone', type:'text'},
                  {label:"Account Rating", fieldName:'Rating', type:'text'}];
        component.set("v.columns", col);
        
    },
    showMe : function(component, event, helper) {
        var acc= event.getParam("acc");
       var accounts = component.get("v.accounts"); //To Ratain existing data --Pull the existing data
        accounts.push(acc);							//Add/Push data received from the event.
        component.set("v.accounts", accounts);		
    }
})