import { LightningElement } from 'lwc';
import MOMENT from '@salesforce/resourceUrl/moment'
import ANIMATE from '@salesforce/resourceUrl/animate'
import {loadScript, loadStyle} from 'lightning/platformResourceLoader'
export default class ThirdPartyFiles extends LightningElement {
    currentDate=''
    dateFormat = ''
    isLibLoaded = false
    renderedCallback(){ 
        if(this.isLibLoaded){ 
            return
        } else { 
            
            Promise.all([
                loadStyle(this, ANIMATE+'/animate/animate.min.css'), 
                loadScript(this, MOMENT+'/moment/moment.min.js')
            ]).then(()=>{ 
                this.setDateOnScreen()
            })
            this.isLibLoaded = true
            
        }
       
    }

    setDateOnScreen(){ 
        this.currentDate = moment().format('LLLL')//Friday, May 27, 2022 9:03 AM

        //Format Dates
        this.dateFormat=  moment().format('MMMM Do YYYY, h:mm:ss a'); // May 27th 2022, 9:04:21 am
        console.log(moment().format('dddd'));                    // Friday
        console.log(moment().format("MMM Do YY"));               // May 27th 22
        console.log( moment().format('YYYY [escaped] YYYY'));     // 2022 escaped 2022
        console.log(moment().format());     // 2022-05-27T09:20:19+05:30
        
        //Relative Time
        console.log(moment("20111031", "YYYYMMDD").fromNow()); // 11 years ago
        console.log(moment("20120620", "YYYYMMDD").fromNow()); // 10 years ago
        console.log(moment().startOf('day').fromNow());        // 9 hours ago
        console.log(moment().endOf('day').fromNow());          // in 15 hours
        console.log(moment().startOf('hour').fromNow());      // 2022-05-27T09:05:19+05:30

        //Calendar Time
        console.log(moment().subtract(10, 'days').calendar()); // 05/17/2022
        console.log(moment().subtract(6, 'days').calendar());  // Last Saturday at 9:11 AM
        console.log(moment().subtract(3, 'days').calendar());  // Last Tuesday at 9:11 AM
        console.log(moment().subtract(1, 'days').calendar());  // Yesterday at 9:11 AM
        console.log(moment().calendar());                      // Today at 9:11 AM
        console.log(moment().add(1, 'days').calendar());       // Tomorrow at 9:11 AM
        console.log(moment().add(3, 'days').calendar());       // Monday at 9:11 AM
        console.log(moment().add(10, 'days').calendar());      // 06/06/2022


        //Multiple Locale Support
        console.log(moment.locale());         // en
        console.log(moment().format('LT'));   // 9:15 AM
        console.log(moment().format('LTS'));  // 9:15:25 AM
        console.log(moment().format('L'));    // 05/27/2022
        console.log(moment().format('l'));    // 5/27/2022
        console.log(moment().format('LL'));   // May 27, 2022
        console.log(moment().format('ll'));   // May 27, 2022
        console.log(moment().format('LLL'));  // May 27, 2022 9:15 AM
        console.log(moment().format('lll'));  // May 27, 2022 9:15 AM
        console.log(moment().format('LLLL')); // Friday, May 27, 2022 9:15 AM
        console.log(moment().format('llll')); // Fri, May 27, 2022 9:15 AM
    }
}