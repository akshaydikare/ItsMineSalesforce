public class MathUtility {
    public static integer addNumbers(List<integer> numbers){
		integer sum= 0;
        for(integer numValue : numbers){
            sum += numValue;
        }
        system.debug('Total Sum : ' +sum);
        return sum;
	}

    public static integer minusNumbers(integer num1, integer num2){
         return num1 - num2; 
	}

    public void caseUpdater(Case caseToUpdate){
        caseToUpdate.subject = 'Case Subject Update';
        update caseToUpdate;
    }
}