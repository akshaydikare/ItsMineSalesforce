({
    doInit : function(component, event, helper) {
        var navService = component.find("navService");
        var pageReference = {
            type: 'standard__recordPage',
            attributes: {
                recordId: '5005j00000iHKzNAAW',
                objectApiName: 'Case',
                actionName: 'view'
            }
        };
        component.set("v.pageReference", pageReference);
        // Set the URL on the link or use the default if there's an error
        var defaultUrl = "#";
        navService.generateUrl(pageReference)
        .then($A.getCallback(function(url) {
            component.set("v.url", url ? url : defaultUrl);
        }), $A.getCallback(function(error) {
            component.set("v.url", defaultUrl);
        }));
        //navService.navigate(pageReference);
    
        helper.fetchDataAndColumns(component);
    },
    
    // Handle row selection and navigate to the record page
    handleRowSelection : function(component, event, helper) {
}
    
    
})