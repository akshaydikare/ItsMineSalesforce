({
    doSaveContact: function(component, event, helper){
        var action = component.get("c.createContact");
        action.setParams({
            accountId: component.get("v.accountId"),
            con:component.get("v.CreateContact")
        });
        action.setCallback(this, function(response){
            var state = response.getState();
            if(state === 'SUCCESS' || state ==='DRAFT'){
                var resValue = response.getReturnValue();	
            }
            else if(state === 'INCOMPLETE'){
                
            }
                else if(state === 'ERROR'){
                    var errors = response.getError(); //Array of Error
                    console.log('Error ', errors[0].duplicateResults);
                    console.log('Error ', errors[0].fieldErrors);
                    console.log('Error ', errors[0].pageErrors[0].message);
                    component.set('v.ErroMessage' , errors[0].pageErrors[0].message);
                    if(errors || errors[0].message){
                        
                    }
                }                    
        })
        $A.enqueueAction(action, false);
    }
})