import { LightningElement, track} from 'lwc';
export default class HelloWorld extends LightningElement {
  greeting = 'World';
  
  changeHandler(event) {
    this.greeting = event.target.value;
  }
//----------------------------------------------------------------------------------------
//@track
  @track address={
    city:'Mohol',
    fullName:'Salesforce',
    age:26
  }
  // trackHandler(event) {
  //   this.address.city = event.target.value;
  // }
  trackHandler(event) {
    this.address.city = event.target.value
  }

//-----------------------------------------------------------------------------------
//Getter Demo

users=['Akshay','Abhinav','Kunal'];
get firstName(){
  return this.users[0];
}

num1 = 12;
num2 = 10;
get multiply(){
  return this.num1 * this.num2;
}
}