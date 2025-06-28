@isTest
public class MathUtilityTest {

    @TestSetup
    public static void makeData(){
        List<Case> caseList = TestData_Factory.createCases(2);
        insert caseList;
    }

    @isTest
    static void addNumbersTest(){
        // Account a = new Account(Name='Acme' + i, BillingCity='San Francisco');
        List<integer> newNumList = new List<integer>{10, 19};
        Integer result = MathUtility.addNumbers(newNumList);
        Assert.areEqual(29, result, 'The addition result should be 29');
	}

    @isTest
    static void subNumbersTest(){
        // Account a = new Account(Name='Acme' + i, BillingCity='San Francisco');
        Integer num1 = 23;
        Integer num2 = 19;
        Integer result = MathUtility.minusNumbers(num1, num2);
        Assert.areEqual(4, result, 'The wubstraction result should be 4');
	}

    
    @isTest
    static void subFalseNumbersTest(){
        // Account a = new Account(Name='Acme' + i, BillingCity='San Francisco');
        Integer num1 = 23;
        Integer num2 = 19;
        Integer result = MathUtility.minusNumbers(num1, num2);
        Assert.areNotEqual(5, result);
	}

    @isTest
    static void caseUpdaterTest(){
        List<Case> cases = [SELECT Id, Subject, Priority FROM Case WHERE SUBJECT LIKE 'Case from TestData_Factory Class%'];
        Test.startTest();
        MathUtility newInstance = new MathUtility();
        newInstance.caseUpdater(cases[0]);
        Test.stopTest();

        Assert.areEqual('Case Subject Update', cases[0].Subject, 'msg: Subject is not updated properly');
    }
}