<aura:application extends="force:slds" >
    <c:Panther_AuraPrac/>
         <!-- Handlers -->
    <aura:handler name="init" value="{!this}" action="{!c.init}" />
    <aura:attribute name="name" type="String" default="Akshay"/>
    <aura:attribute name="age" type="integer" default="23993434"/>
    <aura:attribute name="colorArray" type="String[]" default="['Green','Red','Blue']" />
    <aura:attribute name="colorList" type="List" default="['Green','Red','Blue']" />
    <aura:attribute name="colorSet" type="Set" default="['Green','Red','Blue']" />
    <aura:attribute name="createMap" type="List" />
    
    <aura:attribute name="num1" type="Integer" default=""/>
    <aura:attribute name="num2" type="Integer" default=""/>  
    <aura:attribute name="output" type="Integer" default=""/>
    <aura:attribute name="isBlank" type="Boolean" default="false"/>
    <div aura:id="container">
        <p>
            <lightning:formattedRichText value="This &lt;i&gt;is&lt;/i&gt; some simple rich text. &lt;b&gt;Hello!&lt;/b&gt;"/>
        </p>
        <p>
            <lightning:formattedRichText value="This is a link to &lt;a href=&quot;http://www.salesforce.com&quot;&gt;Salesforce&lt;/a&gt;"/>
        </p>
        <p>
            <lightning:formattedRichText aura:id="svgRichText"/>
        </p>
        <p>
            <lightning:formattedRichText aura:id="listRichText" class="slds-text-body_small"/>
        </p>
        <p>
            <lightning:formattedRichText aura:id="linkifyRichText" class="slds-text-body_small"/>
        </p>
    </div>
    
    <lightning:card title="Attribute Examples">
        <div class="slds-m-around_medium">
    	    <p>{!v.name} - <strong>{!v.colorArray[0]} - {!v.colorList[1]}</strong></p>
    <p><lightning:formattedPhone value="{!v.age}"></lightning:formattedPhone></p>
            
            <aura:iteration items="{!v.colorList}" var="lst">
                <strong>{!lst}</strong><br/>
            </aura:iteration>
            <lightning:input Label="Enter your age" aura:id="printAge"/>
        <lightning:input type="date" name="input1" label="Enter a date" />           
        <lightning:button variant="brand" label="Cmp Methods" value="Cmp Methods" onclick="{!c.doClick}"/>
    	</div>
    </lightning:card>

    
    <!--Calculator Component-->
    <lightning:card title="Calculator">
        <div class="slds-m-around_medium">
        <lightning:input value="{!v.num1}" type ="number" label="Enter first number" required="true" />
        <lightning:input value="{!v.num2}" type ="number" label="Enter second number" required="true"/>
        
            
            
            <aura:if isTrue="{!v.isBlank}">
                <p>Output is:  <strong>{!v.output}</strong></p>
                <aura:set attribute="else">
                    Please enter the numbers and click on any operation you want.<br/>
                </aura:set>
            </aura:if> <br/>
        <lightning:button variant="brand" label="Additon" onclick="{!c.addMe}"/>
        <lightning:button variant="brand" label="Substraction" onclick="{!c.subMe}"/>
        <lightning:button variant="brand" label="Multiplication" onclick="{!c.mulMe}"/>
        <lightning:button variant="brand" label="Division" onclick="{!c.divMe}"/>
        </div>
    </lightning:card>
    
    <lightning:card title="aura:iterator">
        <div class="slds-m-around_medium">
            <aura:iteration items="{!v.colorSet}" var="item">
                <p>{!item}</p>
            </aura:iteration>
            <strong>Map Cretaion in CMPS - To create click on "Cmp Methods" button</strong><br/>
            <aura:iteration items="{!v.createMap}" var="mapItem">
                <strong>Key : {!mapItem.key} :-: Value: {!mapItem.value}</strong><br/>
            </aura:iteration>
            <p><strong></strong></p>
        </div>
    </lightning:card>

    
    
    <c:AccountDatatable_P/>
    
    
   <lightning:recordForm
        recordId="a005j00000Dhd8fAAB"
        objectApiName="Student__c"
        layoutType="Compact"
        columns="1"
        mode="readonly" />
    
</aura:application>