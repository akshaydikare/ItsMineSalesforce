import { LightningElement, api } from 'lwc';

export default class SetterDemoChild extends LightningElement {
    userDetail

    @api
    get details(){
        return  this.userDetail
    }
    set details(data){
        let newAge = data.age*2
        this.userDetail = {...data, age:newAge, "location":"Melbourne", "gender": 'Male'}
    }
}