import { LightningElement } from 'lwc';

export default class QuerySelectorDemo extends LightningElement {

    userNames =['Akshay','Anhinav','Amar']

    fetchDetailHandler(){
       var elem = this.template.querySelector('h1');
       elem.style.border = "1px solid aqua";
        var userNamesList = this.template.querySelectorAll('.name');
       console.log(elem.innerText);
       Array.from(userNamesList).forEach(element => {
           console.log(element.innerText);
           element.setAttribute("title", element.innerText);
       });
 
       const children = this.template.querySelector('.child');

       children.innerHTML = '<p>I am a child</p>';

    }
}