({
    openConfirm: function(cmp, event) {
        this.LightningConfirm.open({
            message: 'this is the confirm message',
            theme: 'warning',
            label: 'Please Confirm',
        }).then(function(result) {
            // result is true if clicked "OK"
            // result is false if clicked "Cancel"
            console.log('confirm result is', result);
        });
    },

    openAlert: function(cmp, event) {
        this.LightningAlert.open({
            message: 'this is the alert message',
            theme: 'error',
            label: 'Error!',
        }).then(function() {
            console.log('alert is closed');
        });
    },

    openPrompt: function(cmp, event) {
        this.LightningPrompt.open({
            message: 'this is the prompt message',
            variant: 'headerless',
            label: 'Please Respond',
            defaultValue: 'default input value',
        }).then(function(result) {
            // result is input value if clicked "OK"
            // result is null if clicked "Cancel"
            console.log('prompt result is', result);
        });
    }
});