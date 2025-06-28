// initCmp.js
({
    doInit: function(cmp) {
        // Set the attribute value. 
        // You could also fire an event here instead.
        cmp.set("v.setMeOnInit", "controller init magic!");
    },
    
    doRender: function(cmp) {
        // Set the attribute value. 
        // You could also fire an event here instead.
        
        cmp.set("v.setMeOnRender", "controller render magic!");

    }
})