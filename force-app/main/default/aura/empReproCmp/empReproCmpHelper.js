({
    // Fetch data and columns
    fetchDataAndColumns : function(component) {
        // Fetch data (you can replace this with your own data fetching logic)
        var action = component.get("c.fetchCases");
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                component.set("v.data", response.getReturnValue());
            }
        });
        $A.enqueueAction(action);

        // Define columns for the datatable
        var columns = [
             {label: 'Case Id', fieldName: 'Id', type: 'text'},
            {label: 'Case Number', fieldName: 'CaseNumber', type: 'text'},
            {label: 'Status', fieldName : 'status', type: 'text'},
            {label: 'Origin', fieldName: 'origin',type: 'text'},
            // Add more columns as needed
        ];
        component.set("v.columns", columns);
    }
})