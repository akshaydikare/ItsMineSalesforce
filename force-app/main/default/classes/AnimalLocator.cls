public class AnimalLocator {
    public static String getAnimalNameById(Integer animalId){
        Http http = new Http();
        HttpRequest request = new HttpRequest();
        request.setEndpoint('https://th-apex-http-callout.herokuapp.com/animals/'+animalId);
        request.setMethod('GET');
        HttpResponse response = http.send(request);
        
        Map<String, Object> result = (Map<String, Object>) JSON.deserializeUntyped(response.getBody());
        system.debug(result.keySet());
        Map<String, Object> animal = (Map<String, Object>) result.get('animal');
        system.debug(animal.keySet());
         system.debug(animal.values());
        system.debug(animal.get('name'));
        return String.valueOf(animal.get('name'));
        
    }
}