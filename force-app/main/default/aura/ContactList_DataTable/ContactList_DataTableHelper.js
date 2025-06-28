({
    getData : function(cmp) {
        var action = cmp.get('c.getContacts');
        action.setCallback(this, $A.getCallback(function (response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                //cmp.set('v.mydata', response.getReturnValue());
                var rows = response.getReturnValue();
                for (var i = 0; i < rows.length; i++) {
                    var row = rows[i];
                    if (row.Account) {
                        row.AccountName = row.Account.Name;
                        row.Industry = row.Account.Industry;
                    }
                }
                cmp.set('v.mydata', rows);
            } else if (state === "ERROR") {
                var errors = response.getError();
                console.error(errors);
            }
        }));
        $A.enqueueAction(action);
    }
})