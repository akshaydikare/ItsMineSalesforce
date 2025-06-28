({
    fetchAccountList : function(component, helper) { 
        component.set('v.myColumns',[ 
            {label:'Account Name',fieldName:'Name',type:'text'}, 
            {label:'Industry',fieldName:'Industry',type:'text'}, 
            {label:'Rating',fieldName:'Rating',type:'text'}, 
            {label:'Phone',fieldName:'Phone',type:'Phone'}, 
            {type: "button", typeAttributes: { 
                label: 'View', 
                name: 'View' 
            }} 
        ]); 
        
        //console.log("helper before callback"); 
        var action = component.get('c.getAllAccounts'); 
        action.setCallback(this,function(response){ 
            console.log("helper callback"); 
            var state = response.getState(); 
            var accs = response.getReturnValue(); 
            // console.log('accounts == '+accs); 
            
            if(state=='SUCCESS'){ 
                // console.log("Response callback success"); 
                component.set('v.accList',accs); 
            } 
        }); 
        $A.enqueueAction(action,true); 
    }, 
    
    viewRecord : function(component, event, helper) { 
        var rowId =  event.getParam('row').Id; 
        
        //component.set("v.test",rowId); 
        var cmpEve = component.getEvent("passingCurrentRecId"); 
        cmpEve.setParams({selectedRecord : rowId}); 
        cmpEve.fire();        //var allAcc = component.get('v.accList');   
    } 
 })