trigger LeadDuplicateCheckTrigger on Lead (before insert) {
    //set of email and phone
    set<string> SetEmail = New set<string>();
    set<string> SetPhone = New Set<string>();

    //enter data using trigger.new
    for(lead leadd :trigger.new){
        SetEmail.add(leadd.Email);
        SetPhone.add(leadd.phone);
    }
    //query to fetch records and save into list
    List<Lead> VarQueryfetchList = New List<Lead>();
    VarQueryfetchList = [SELECT id,phone,email FROM Lead WHERE phone in:SetPhone OR Email in:SetEmail];
    for(Lead VarLead:Trigger.new){
        if(VarQueryfetchList.size()>0){
             VarLead.addError('Sorry!Entered data is duplicate');
        }
    }
}