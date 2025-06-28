({
    getAcc : function( component, event, helper) {  
        var accID = event.getParam("selectedRecord"); 
        alert(accID);
        /*var navEvt = $A.get("e.force:navigateToSObject"); 
        navEvt.setParams({ 
            "recordId": accID, 
            "slideDevName": "detail" 
        }); 
        navEvt.fire(); */
        
        
         //console.log("helper before callback"); 
        var action = component.get('c.getAccountDetails'); 
        action.setParams({
            accountId:accID
        });
        action.setCallback(this,function(response){ 
            console.log("helper callback"); 
            var state = response.getState();
            var acc = response.getReturnValue(); 
            // console.log('accounts == '+accs); 
            
            if(state=='SUCCESS'){ 
                // console.log("Response callback success"); 
                component.set('v.accountRec',acc); 
            } 
        }); 
        $A.enqueueAction(action,true); 
    }
 
})