({
    doInit : function(component, event, helper) {        
        helper.getAccounts(component, helper);
    },
     
    handleNext : function(component, event, helper) { 
        var pageNumber = component.get("v.pageNumber");
        component.set("v.pageNumber", pageNumber+1);
        helper.getAccounts(component, helper);
    },
     
    handlePrev : function(component, event, helper) {        
        var pageNumber = component.get("v.pageNumber");
        component.set("v.pageNumber", pageNumber-1);
        helper.getAccounts(component, helper);
    },
 
    handleRowAction: function (component, event, helper) {
        var selectedAction = event.detail.menuItem.get("v.value");
        var selectedAccountId = event.getSource().get("v.value");
        switch (selectedAction) {
            case 'edit':
                helper.editRecord(component, event, selectedAccountId);
                break;
            case 'view':
                helper.viewRecord(component, event, selectedAccountId);
                break;
        }
    },
     
    handleSorting: function (component, event, helper) {
        var selectedItem = event.currentTarget;
        var selectedField = selectedItem.dataset.record;
         
        component.set("v.isSortByName", false);
        component.set("v.isSortByAccNo", false);
        component.set("v.isSortByIndustry", false);
        component.set("v.isSortByPhone", false);
        component.set("v.selectedSortingField", selectedField);
         
        if(selectedField == 'Name'){
            component.set("v.isSortByName", true);
        }else if(selectedField == 'AccountNumber'){
            component.set("v.isSortByAccNo", true);
        }else if(selectedField == 'Industry'){
            component.set("v.isSortByIndustry", true);
        }else if(selectedField == 'Phone'){
            component.set("v.isSortByPhone", true);
        }
        helper.sortColumnData(component, event);
    },
})