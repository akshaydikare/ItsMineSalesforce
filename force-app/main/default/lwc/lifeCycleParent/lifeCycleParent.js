import { LightningElement } from 'lwc';

export default class LifeCycleParent extends LightningElement {
    isChildVisible = false
    constructor(){ 
        super()
        console.log("parent constructor called")

        //This method is invoked, when a cmp instance is created.
        //We have to call super() method
        
    }
    connectedCallback(){ 
        console.log("parent connectedCallback called")
        //get called when element is inserted into a dom
        //this hook is flows from Parent to Child
        //Can't access the child elements b'coz they does not exist yet
        //Used to: Perform initialization tasks, such as fetch data from server, set up caches, or listen for events
        
    }
    renderedCallback(){ 
        console.log("parent renderedCallback called")
        //fires when cmp rendering is done
        //It can fire more than one
        //This method is flows from child to parent
    }

    name
    changeHandler(event){
        this.name = event.target.value
    }
   
    errorCallback(error, stack){
        console.log(error.message);
        console.log(stack);
    }

    handleClick(){
        this.isChildVisible=!this.isChildVisible;
    }
}