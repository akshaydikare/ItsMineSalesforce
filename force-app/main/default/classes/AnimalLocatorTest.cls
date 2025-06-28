@isTest
private class AnimalLocatorTest {
    @isTest
     static void AnimalLocatorTest1(){
        Test.setMock(HttpCalloutMock.class, new AnimalLocatorMock());
        
        String actualValue = AnimalLocator.getAnimalNameById(1);
        String expectedValue = 'chicken';
        System.assertEquals(expectedValue, actualValue);
    }
}