import { LightningElement } from 'lwc';

export default class InterestCalculator extends LightningElement {
    amount;
    time;
    rate;
    interest = 0;
    TotalMaturityAmount = 0;

    captureData(event) {
        var wh = event.target.name
        if (wh == 'amount') {
            this.amount = event.target.value
        }
        else if (wh == 'time') {
            this.time = event.target.value
        }
        else {
            this.rate = event.target.value
        }
    }
    calculateInterest() {

        this.interest = (this.amount * this.time * this.rate) / 100;
        this.TotalMaturityAmount = parseFloat(this.interest) + parseFloat(this.amount);
    }

    clearForm() {
        this.interest = 0;
        this.TotalMaturityAmount = 0;
        this.amount = null;
        this.time = null;
        this.rate = null;
    }
}