({
    init: function (cmp, event, helper) {
         cmp.set('v.mycolumns', [
             { label: 'Contact Name', fieldName: 'Name', type: 'text'},
             { label: 'Phone', fieldName: 'Phone', type: 'phone'},
             { label: 'Email', fieldName: 'Email', type: 'email'},
             { label: 'Account Name', fieldName: 'AccountName', type: 'text'},
             { label: 'Industry', fieldName: 'Industry', type: 'text'}
         ]);
         helper.getData(cmp);
     }
 })