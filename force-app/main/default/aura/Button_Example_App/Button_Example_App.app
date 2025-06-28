<aura:application extends="force:slds">
    <c:Button_Example_1 /><br/><br/><br/>
    
    <div class="my-custom-background">
        <lightning:button label="Inverse" variant="inverse" />
        <lightning:button label="Inverse disabled" variant="inverse" disabled="true"/>
        <!-- inverse with icons -->
        <lightning:button label="Icon #1" iconName="utility:download" iconPosition="left"  variant="inverse" />
        <lightning:button label="Icon #2" iconName="utility:download" iconPosition="right" variant="inverse" />
        <lightning:button label="Icon #2" iconName="utility:download" iconPosition="right" variant="inverse" disabled="true" />
    </div>
</aura:application>