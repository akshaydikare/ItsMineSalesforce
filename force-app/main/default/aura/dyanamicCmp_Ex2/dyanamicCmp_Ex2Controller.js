({
    createMe: function (component, event, helper) {
        $A.createComponents([
            [
                "lightning:button",
                {
                    "label": "Dynamic",
                    "variant": "destructive",
                    "onclick": component.getReference("c.callme")
                }
            ],
            [
                "lightning:button",
                {
                    "aura:id":"btnBrand",
                    "label": "Dynamic 2",
                    "variant": "brand",
                    "onclick": component.getReference("c.callme")
                }
            ],
            [ 
                "lightning:input",
                {
                    "type":"date",
                    "name": "input1",
                    "label":"Enter a date"
                }
            ]
        ],
            function (cmp, status, errorMessage) {
                if (status == 'SUCCESS') {
                    var body1 = component.get("v.body");
                    cmp.forEach(function (item) {
                        body1.push(item);
                    });

                    component.set("v.body", body1);
                }
                else {
                    alert('Error!');
                }

            });
    },

    callme: function(component){
        alert('dynamic cmp create');
    },

    destroyCmp: function(component, event, helper){
      var a=  component.find('btnBrand');
        a.destroy();
    }

})