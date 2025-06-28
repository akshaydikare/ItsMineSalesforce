import { LightningElement,track} from 'lwc';

export default class LightningLocationService_Ex extends LightningElement {
    lstMarkers = [];
    zoomlevel = "1";

    @track lat
    @track longi

    connectedCallback(){
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                // Get the Latitude and Longitude from Geolocation API 
                console.log(` this.lat: ${position.coords.latitude} &  this.longi = ${position.coords.longitude}`);
               
            });
        }
    }

    handleClick(){
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {

                // Get the Latitude and Longitude from Geolocation API
                var latitude = position.coords.latitude;
                var longitude = position.coords.longitude;
               this.lat = latitude
               this.longi = longitude

               console.log(` this.lat: ${ this.lat} &  this.longi: ${longi}`);
                // Add Latitude and Longitude to the markers list.
                this.lstMarkers = [{
                    location : {
                        Latitude: latitude,
                        Longitude : longitude
                    },
                    title : 'You are here'
                }];
                this.zoomlevel = "5";
            });
        }
    }
}