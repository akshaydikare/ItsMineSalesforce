({
    getAccounts: function(component, event) {
        var action = component.get("c.getAccountList");
        action.setParams({
            "pageSize": component.get("v.pageSize"),
            "pageNumber": component.get("v.pageNumber"),
            "sortingField": component.get("v.selectedSortingField"),
            "isSortAsc": component.get("v.isSortAsc")
        });
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (component.isValid() && state === "SUCCESS"){
                var result = response.getReturnValue();
                if(result){
                    var resultData = JSON.parse(result);
                    var pageSize = component.get("v.pageSize");
                    component.set("v.accounts", resultData.accounts);
                    component.set("v.pageNumber", resultData.pageNumber);
                    component.set("v.totalRecords", resultData.totalRecords);
                    component.set("v.recordStart", resultData.recordStart);
                    component.set("v.recordEnd", resultData.recordEnd);
                    component.set("v.totalPages", Math.ceil(resultData.totalRecords / pageSize));
                }
            }
        });
        $A.enqueueAction(action);
    },
     
    viewRecord : function(component, event, selectedAccountId) {
        var navEvt = $A.get("e.force:navigateToSObject");
        navEvt.setParams({
            "recordId": selectedAccountId,
            "slideDevName": "detail"
        });
        navEvt.fire();
    },
     
    editRecord : function(component, event, selectedAccountId) {
        var editRecordEvent = $A.get("e.force:editRecord");
        editRecordEvent.setParams({
            "recordId": selectedAccountId
        });
        editRecordEvent.fire();
    },
     
    sortColumnData: function(component, event) {
        var accountList = component.get("v.accounts");
        var isSortAsc = component.get("v.isSortAsc");
        var sortingField = component.get("v.selectedSortingField");
        accountList.sort(function(a, b){
            var s1 = a[sortingField] == b[sortingField];
            var s2 = (!a[sortingField] && b[sortingField]) || (a[sortingField] < b[sortingField]);
            return s1? 0: (isSortAsc?-1:1)*(s2?1:-1);
        });
        component.set("v.accounts", accountList);
        component.set("v.isSortAsc", !isSortAsc);
    },
})