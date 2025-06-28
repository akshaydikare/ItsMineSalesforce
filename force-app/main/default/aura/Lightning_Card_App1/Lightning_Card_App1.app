<aura:application extends="force:slds">
    <lightning:card>
        <aura:set attribute="title">
            <lightning:avatar fallbackIconName="standard:person_account" alternativeText="Account Name"/>     
        Account
        </aura:set>
    </lightning:card>
    <lightning:card title="Lightning Card">
 		 <aura:set attribute="actions">
           <lightning:buttonGroup>
               <lightning:button label="Submit"/>
               <lightning:button label="Cancel"/>
               <lightning:button label="Reset"/>           
           </lightning:buttonGroup>
        </aura:set>
	</lightning:card>
</aura:application>