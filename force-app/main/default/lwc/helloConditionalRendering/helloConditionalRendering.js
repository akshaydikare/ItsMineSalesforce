import { LightningElement } from 'lwc';

export default class HelloConditionalRendering extends LightningElement {
    isVisible=false;
    name1
    handleClick(){
        this.isVisible= true;
    }

    changeHandler(event){
        this.name1 = event.target.value;
    }

    get helloMethod(){
        return this.name1 == 'hello';
    }

    //Falsy values from JS 
    //false, 0, '', null, undefined
}