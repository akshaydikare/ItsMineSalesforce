<aura:application extends="force:slds">
    <c:Interest_Calc_Cmp amount="100000" rate="5" years="2"/>
    

    <!-- Base variant: Makes a button look like a link -->
    <lightning:button variant="base" label="Base" title="Base" /><br/><br/>

    <div class="my-custom-background">
      <!-- inverse variant: Makes a button look like a link -->
    <lightning:button variant="inverse" label="inverse" title="inverse" /><br/><br/>
    </div>
    <!-- Neutral variant (default) -->
    <lightning:button label="Neutral" title="Neutral action"/><br/><br/>

    <!-- Brand variant: Identifies the primary action in a group of buttons -->
    <lightning:button variant="brand" label="Brand" title="Brand" /><br/><br/>

    <!-- Brand-outline variant: Identifies the primary action in a group of buttons, but has a lighter look -->
    <lightning:button variant="brand-outline" label="Brand Outline" title="Brand-Outline"  /><br/><br/>

    <!-- Destructive variant: Identifies a potentially negative action -->
    <lightning:button variant="destructive" label="Destructive" title="Destructive" iconName="utility:delete" iconPosition="right"/><br/><br/>

    <!-- Destructive-text variant: Identifies a potentially negative action, but has a lighter look -->
    <lightning:button variant="destructive-text" label="Destructive Text" title="Destructive action" iconName="utility:delete" iconPosition="left"/><br/><br/>

    <!-- Success variant: Identifies a successful action -->
    <lightning:button variant="success" label="Success" title="Success" iconName="utility:download" iconPosition="left" /><br/>
</aura:application>