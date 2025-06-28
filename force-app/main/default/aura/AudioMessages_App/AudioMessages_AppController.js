({
    handleShowToast : function(component, event, helper) {
        component.find('notifLib').showToast({
        "title": "Success!",
        "message": "The record has been updated successfully."
        });
	}
})