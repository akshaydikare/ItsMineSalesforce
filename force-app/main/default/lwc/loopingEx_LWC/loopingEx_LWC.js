import { LightningElement } from 'lwc';

export default class LoopingEx_LWC extends LightningElement {

    courseLst =[".Net", "Java", "Cypress", "Salesforce", "PHP Dev"]


    trainerList = [
        {
            id:1,
            course:"DotNet",
            tName:"Vikul"
        },
        {
            id:2,
            course:"Java",
            tName:"Amit"
        },
        {
            id: 3,
            course:"Salesforce",
            tName:"Akshay"
        },
        {
            id: 4,
            course:"Cypress",
            tName:"Chinmay"
        }
    ]

}