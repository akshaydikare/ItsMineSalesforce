import { LightningElement , track} from 'lwc';

export default class Lwc_two_directives extends LightningElement {
    // @track trackObject= {
    //     name : 'Akshika',
    //     age : 24,
    //     gender : 'Male',
    //     city : 'Pune'
    // }
    num1 = 12
    num2 = 13

     trackObject= {
        name : 'Akshika',
        age : 24,
        gender : 'Male',
        city : 'Pune'
    }
    handleCityChange(event){
        //this.trackObject.city = event.target.value;
        this.trackObject = {...this.trackObject, "city": event.target.value, "age" : 29}
    }

    get multiplyGetter() {
        return this.num2  * this.num1
    }

    cars = [
        {
          "color": "purple",
          "type": "minivan",
          "registration": new Date('2017-01-03'),
          "capacity": 7
        },
        {
          "color": "red",
          "type": "station wagon",
          "registration": new Date('2018-03-03'),
          "capacity": 5
        },
        {
          "color": "blue",
          "type": "bus",
          "registration": new Date('2018-03-03'),
          "capacity": 18
        },
        {
            "color": "green",
            "type": "Van",
            "registration": new Date('2018-03-03'),
            "capacity": 4
          }
      ]

      
}