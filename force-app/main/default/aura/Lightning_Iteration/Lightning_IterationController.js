({
	clickForAlert : function(component, event, helper) {
		helper.clickForAlertHelper(component, event, helper);
	},
    onInit : function(component, event, helper) {
		alert("Init System Event fired");
	},
    onRender : function(component, event, helper) {
		alert("Render System Event fired");
	},
})