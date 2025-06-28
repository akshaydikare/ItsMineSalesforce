({
    showMe : function(component, event, helper) {
       var name = event.getParam('empName');
       alert('This is parent, Handled event fired by child and Data Entered in child is: '+name);
    }
})