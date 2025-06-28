({
	AccountHelper : function(component) {
		 var name = component.get("v.name");
        var phone = component.get("v.phone");
        var rating = component.get("v.rating");
        var industry = component.get("v.industry");
        
        //Step1: Call/get the method
        var action = component.get("c.CreateAccount"); //This c. refers to the SSC(Server Side Controller)
        
        //Step2: Pass the params
        action.setParams({"name":name, "rating":rating, "phone":phone, "industry":industry});
        
        //Step3: Invoke the SSC Method
        action.setCallback(this, function(response){
            var res = response.getState(); //3.1: Get the state
            
            if(res === "SUCCESS"){
                var result = response.getReturnValue(); ////3.2: Get the response from the SSC method
                component.set("v.flag", true);
                component.set("v.result",result );
                
            }
            else{
                component.set("v.flag", false);
                //component.set("v.result",result ); 
                alert('Please try again');  
            }
        });
        
        //Step4: Enqueue/Pipeline the Method
        $A.enqueueAction(action);
       
	}
})