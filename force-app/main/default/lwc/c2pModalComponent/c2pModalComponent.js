import { LightningElement } from 'lwc';

export default class C2pModalComponent extends LightningElement {

    closeHandler(){ 
        const myEvent = new CustomEvent('close', {detail:"Modal Successfully Created for demo of Child to Parent data passing!!"})
        this.dispatchEvent(myEvent)
    }
}