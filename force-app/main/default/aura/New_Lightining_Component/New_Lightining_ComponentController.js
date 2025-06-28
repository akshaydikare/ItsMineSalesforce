({
	show : function(component, event, helper) {
			component.set("v.empName", "Akshay Dikare");
        	component.set("v.salary", 50000);
    },
    invoke : function(component, event, helper) {
			component.set("v.empName", "");
        	component.set("v.salary", 0);     
	}

})