public with sharing class TestData_Factory {
    public static List<Case> createCases (Integer numCases){
        List<Case> caseList =  new List<Case>();
        for(integer i = 0; i < numCases; i++){
            Case newCase = new Case(Subject = 'Case from TestData_Factory Class: '+i);
            caseList.add(newCase);  
        }
        return caseList;
    }
}