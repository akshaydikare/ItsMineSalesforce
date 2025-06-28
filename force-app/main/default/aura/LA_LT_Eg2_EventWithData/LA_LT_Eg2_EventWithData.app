<aura:application extends="force:slds">
    <aura:handler name="second" event="c:LE_LT_Eg2_EventWithData" action="{!c.appMe}"/>
    <!--<c:LC_LT_Eg2_Parent_EventWithData/>-->
     <c:LC_LT_Eg2_GrandParent_EventWithData/>
</aura:application>