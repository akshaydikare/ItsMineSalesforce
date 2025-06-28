({
    createMe : function(component, event, helper) {
        $A.createComponent("lightning:button", {"label":"Dynamic", 
        "variant":"destructive",
         "onclick":component.getReference("c.callme")
        },
         function(cmp, status, errorMessage){
            if(status == 'SUCCESS'){
                var body1 = component.get("v.body");
                body1.push(cmp);
                component.set("v.body", body1);
            }

        });
    },
    callme:function(component){
        $A.createComponent("lightning:button", {"label":"ByeBtn", 
        "variant":"brand",
         "onclick":component.getReference("c.Bye")
        },
         function(cmp, status, errorMessage){
            if(status == 'SUCCESS'){
                var body1 = component.get("v.body");
                body1.push(cmp);
                component.set("v.body", body1);
            }

        });
    },

    Bye: function(component){
        alert('Dynamic Bye alert');
    }
})