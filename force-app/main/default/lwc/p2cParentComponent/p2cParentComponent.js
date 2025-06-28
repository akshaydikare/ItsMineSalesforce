import { LightningElement } from 'lwc';

export default class P2cParentComponent extends LightningElement {
    carouselData=[
        {
            src:"https://www.lightningdesignsystem.com/assets/images/carousel/carousel-01.jpg",
            header:"First carousel Card heading",
            description:"First carousel Description"
        },
        {
            src:"https://www.lightningdesignsystem.com/assets/images/carousel/carousel-02.jpg",
            header:"Second carousel Card heading",
            description:"Second carousel Description"
        },
        {
            src:"https://www.lightningdesignsystem.com/assets/images/carousel/carousel-03.jpg",
            header:"Third carousel Card heading",
            description:"Third carousel Description"
        }
    ]

    percentage=10
    changeHandler(event){
        this.percentage = event.target.value
    }

    handleClick(){
        this.template.querySelector('c-p2c-slider-component').resetSlider()
    }
}