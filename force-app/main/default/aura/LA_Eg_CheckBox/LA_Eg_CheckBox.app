<aura:application extends="force:slds">
    <lightning:input type="checkbox" label="Remember Me" checked="true"/>
    
    <lightning:input type="date" name="input5" label="Required date field" required="true" value="2020-09-07" />
    <lightning:input type="date" name="input6" label="Read-only date field" readonly="true" value="2020-09-07" />
    <lightning:input type="date" name="input7" label="Disabled date field" disabled="true" value="2020-09-07" />
    <lightning:input type="date" name="input8" label="Date field with min and max values" value="2020-09-07" min="2020-09-05" max="2020-09-22" />
    
    
    <lightning:input type="color" name="color" label="Favorite Color"/>
    
    <lightning:input type="email" name="email4" readonly="true" value="lightning@force.com" label="Read-only email field" />
    <lightning:input type="email" name="email5" disabled="true" value="lightning@force.com" label="Disabled email field" />
    <lightning:input type="email" name="email6" required="true" value="lightning@force.com" label="Required email field" />   
    <lightning:input type="email" name="email1" value="abc@domain.com" label="Email field with predefined value" />
    <lightning:input type="email" name="email2" value="invalid-email-address" label="Email field with an invalid value" />
    <lightning:input type="email" name="email3" placeholder="youraddress@company.com" label="Email field with a placeholder" />
    <lightning:input type="email" name="email4" value="name@localhost" label="Email field without a top-level domain" />
    
    <lightning:input type="toggle" label="Basic option" name="input1"/>
    <lightning:input type="toggle" label="Required option" name="input2" checked="true" required="true"/>
    <lightning:input type="toggle" label="Disabled option" name="input3" checked="true" disabled="true"/>
    
    <div onkeyup="{! c.handleKeyUp }">
        <lightning:input
            aura:id="enter-search"
            name="enter-search"
            label="Search when user hits the 'enter' key"
            type="search"
        />
    </div>

</aura:application>