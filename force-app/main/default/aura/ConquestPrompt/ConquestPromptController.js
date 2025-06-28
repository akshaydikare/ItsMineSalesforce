({
    doInit: function (component, event, helper) {
        console.log('RECORDID IN PROMPT: ' + component.get("v.recordId"));
        $A.createComponent(
            "c:ConquestPromptFooter",
            { "type": component.get("v.type"), "recordId": component.get("v.recordId") },
            function(cmp, status) {
                if (status === "SUCCESS") {
                    component.find("overlayPrompt").showCustomModal({
                        header: component.get("v.title"),
                        body: component.get("v.message"),
                        footer: cmp
                    });
            	}
        	}
        );
    }
})