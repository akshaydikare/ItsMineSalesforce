import { LightningElement, wire } from 'lwc';
import gelAllCasess from '@salesforce/apex/GetAllCases.AllCasesList'
export default class ShowAllCases extends LightningElement {
    selectedOrigin = ''
allCasesList
    @wire(gelAllCasess, {origin:'$selectedOrigin'})
    allCases({data, error}){
        if(data){
          this.allCasesList = data.map(item => {
                let newDate = item.ClosedDate == null ? 'Not Closed' : new Date(item.ClosedDate);
           console.log(newDate);
                return {...item, newDate}
        })
        }
        if(error){
            console.log('Errrorrrrrr',error);
        }
    }

    get originOptions() {
        return [
            { label: 'Phone', value: 'Phone' },
            { label: 'Web', value: 'Web' },
            { label: 'Email', value: 'Email' },
        ];
    }

    handleChange(event) {
        this.selectedOrigin = event.detail.value;
    }
}