<aura:application extends="force:slds">
    <aura:attribute name="recId" type="Id" default='0015j00000WFirkAAD'/>
    <lightning:recordEditForm recordId="{!v.recId}" objectApiName="Account">
        <div class="slds-box">
            <lightning:inputField fieldName="Name" />
            <lightning:inputField fieldName="Industry" />
            <lightning:inputField fieldName="Type" />
            <lightning:inputField fieldName="Phone" />
        </div>
    </lightning:recordEditForm>
    <hr/>
    <lightning:recordForm
        recordId="0015j00000WFirkAAD"
        objectApiName="Account"
        layoutType="Compact"
        columns="2"
        mode="readonly" />
</aura:application>