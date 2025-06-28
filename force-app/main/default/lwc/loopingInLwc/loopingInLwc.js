import { LightningElement } from 'lwc';

export default class LoopingInLwc extends LightningElement {
    carList = ['BMW', 'Audi', 'Mustang', "Mercedies", "Bently"]

    ceoList = [
        { id: 1, company: "Google", name: "Sundar" },
        { id: 2, company: "Amazon", name: "Jeff" },
        { id: 3, company: "Apple", name: "Cook" },
        { id: 4, company: "Facebook", name: "Mark" }
    ]


    studnetList = [
        { id: 1, school: "Tembhurni College", name: "Ajinkya" },
        { id: 2, school: "Mumbai College", name: "Jay" },
        { id: 3, school: "Hivare Highschool", name: "Sagar" },
        { id: 4, school: "ZP Highschool", name: "Ramkrishna" }
    ]
}