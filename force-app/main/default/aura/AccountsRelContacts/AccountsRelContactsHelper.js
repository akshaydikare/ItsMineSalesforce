({
    getAllAccount : function(component, event, helper) {        
        var searchKey = component.find("accountIDd").get("v.value");
        if(searchKey.length > 5){
            var action=component.get('c.fetchAccount');
            
            action.setParams({searchAccount:searchKey});
            action.setCallback(this,function(response){
                var state= response.getState();
                if(state== 'SUCCESS'){
                    var account = response.getReturnValue();
                    console.log(account);
                    component.set('v.AccountCols', [
                        {label: 'Account Name', fieldName: 'Name', type: 'text'},
                        {label: 'Account Industry', fieldName: 'Industry', type: 'text'},
                        {label: 'Rating', fieldName: 'Rating', type: 'text'},
                        {label: 'Website', fieldName: 'Website', type: 'url'}
                    ]);
                    
                    component.set('v.accountList',account);
                    component.set('v.accountId',account.Id);
                    
                    helper.helperGetContact(component, event, helper);
                    helper.helperGetOpportunity(component, event, helper);
                }
            });
            $A.enqueueAction(action);
        }       
    },   
    
    helperGetContact: function(component, event, helper){
        component.set('v.ContactsCols', [
            {label: 'First name', fieldName: 'FirstName', type: 'text'},
            {label: 'Last Name', fieldName: 'LastName', type: 'text'},
            {label: 'Phone', fieldName: 'Phone', type: 'text'},
            {label: 'Email', fieldName: 'Email', type: 'email'}
        ]);
        
        var acid=component.get('v.accountId');
        console.log(acid);
        var action=component.get('c.getContact');
        action.setParams({
            accid:acid
        });
        action.setCallback(this,function(response){
            console.log('response===>  '+JSON.stringify(response.getReturnValue()));
            if(response.getReturnValue()!=null){
                console.log('success');
                component.set('v.contactList',response.getReturnValue());
            }
        });
        $A.enqueueAction(action);
    },
    
    helperGetOpportunity : function(component, event, Helper){        
        component.set('v.opportunityCols', [
            {label: 'Opportunity name', fieldName: 'Name', type: 'text'},
            {label: 'Opportunity Amount', fieldName: 'Amount', type: 'currency'},
            {label: 'Opportunity CloseDate', fieldName: 'CloseDate', type: 'date'},
            {label: 'Opportunity Stage', fieldName: 'StageName', type: 'text'}
        ]);
        
        var opid=component.get('v.accountId');
        console.log(opid);
        var action = component.get('c.getopportunity');
        
        action.setParams({
            accid:opid
        });
        action.setCallback(this, function(response){
            console.log('opp response==>  '+JSON.stringify(response.getReturnValue()));
            if(response.getReturnValue() != null){
                console.log("OPP success");
                component.set('v.opportunityList', response.getReturnValue());
                console.log("Pass");
            }
        }); 
        $A.enqueueAction(action);
    }
})