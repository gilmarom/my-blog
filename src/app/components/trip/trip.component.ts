
import { NgModule, Component, OnInit, Inject, ElementRef,ViewChild, NgZone, Input, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';
import {  ResturantListComponent } from './returant-list/returant-list.component'; 
import { AgmCoreModule , MapsAPILoader, AgmInfoWindow, AgmMarker, GoogleMapsAPIWrapper} from '@agm/core';
import { GoogleMapDirective } from '../../directives/google-map.directive'; 
//import { Http , Response, Headers,RequestOptions,ResponseOptions } from '@angular/http'; //
import { AlertService } from '../../services/alert.service'; //

import 'rxjs/add/operator/concatMap';
import 'rxjs/add/operator/map';
import { Observable, } from 'rxjs/Rx';
import { FormControl, FormsModule, ReactiveFormsModule, FormGroup } from "@angular/forms";
import { } from 'googlemaps';


declare var $;
function test(el){
  console.log(el)
}

let self = this;

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.css'],
  providers: [GoogleMapsAPIWrapper],
})


export class TripComponent implements OnInit ,OnChanges {
  
  public massage: Object;
  public placeId: string;
  public lat: number = 51.678418;
  public lng: number = 7.809007;
  public zoom: number = 8;
  public searchControl: FormControl;
  public mapControl: FormControl;
  
  public newPlaces:Array<string>;
  public names = "";
  public isResturants: boolean; /// if i have no resturants in list dont show me the returants component
  flag = false;
  
  @ViewChild(GoogleMapDirective) vcGMD: GoogleMapDirective;
  
  @ViewChild("search")
  public searchElementRef: ElementRef;
  
  @ViewChild("map") 
  public mapElementRef: ElementRef;
   map: any;
   
  constructor(
  // private http: Http,//
   private mapsAPILoader: MapsAPILoader,
   private alertService: AlertService,//
   public ngZone: NgZone,
   private _elementRef : ElementRef
   )
   {}
  
  
  publicFunc(item, flag){
    console.log(flag,item,1, this.names, (TripComponent.prototype as any).names, TripComponent.prototype);
    // (AnalyticsComponent.prototype as any).names = item;
    (TripComponent.prototype as any).names = "ss";
    this.isResturants=true;
    for(let i = 0; i < item.length; i++){
     console.log(item[i]);
    $('#list').show(flag);  
    $('#mySelect').append($('<mat-list-item>', { 
        value: i,
        text : item[i] 
    })); 
   }
  }
  
  ngOnInit(){
    this.isResturants = false;
    this.lat = 51.678418;
    this.lng = 7.809007;
    this.zoom = 8;
    this.newPlaces=[];
      //create search FormControl
    this.searchControl = new FormControl();
    this.publicFunc(0,false);
    //set current position
    this.setCurrentPosition();
    //let directionsDisplay = new google.maps.DirectionsRenderer;
    
    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
     
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["address"]
      });
      
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();
           
          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
          
          //set latitude, longitude and zoom
          this.placeId = place.place_id;
          this.lat = place.geometry.location.lat();
          this.lng = place.geometry.location.lng();
          this.zoom = 12;
          
        });
      });
    });
  }
  
  ngOnChanges(changes: SimpleChanges){
    let server = new google.maps.places.PlacesService(this.mapElementRef.nativeElement);
    for (let property in changes) {
          if (property === 'isResturants') {
              console.log('Previous:', changes[property].previousValue);
              console.log('Current:', changes[property].currentValue);
              console.log('firstChange:', changes[property].firstChange);
            } 
        }
  }
   
  clickedMarker(label: string, index: number ) {
    console.log(`clicked the marker: ${label || index }`)
    
  } 
  
  markerDragEnd( marker: any, $event: any) {
    console.log('dragEnd', marker, $event);
  }
 
  mapClicked($event: any) {
      
      
      const newMarker ={
      name: 'Untitled',
      placeId: $event.place,
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true,
      map: $event.map
      }
      
      console.log(newMarker.map, "map here");
      this.markers.push(newMarker);
      console.log(this.markers);
      this.massage = this.markers;
       
      let latlng = {
        lat: newMarker.lat,
        lng: newMarker.lng
      }
      console.log(this.markers);   
      this.getResturants(latlng);
      //console.log( this.isResturants); 
  }
  
  setCurrentPosition(){
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.zoom = 12;
      });
    }
  }  

  calculateAndDisplayRoute(){
      
     const directionsDisplay = new google.maps.DirectionsRenderer;
     const directionsService = new google.maps.DirectionsService;
     var geocoder = new google.maps.Geocoder();
     const waypts = [];
     const checkboxArray = this.markers;
     console.log("calculateAndDisplayRoute", this.markers); 
     
     ///create Array of way points from all markers : waypts[]
     for (var i = 0; i < checkboxArray.length; i++) {
           
            waypts.push({
              location: {'lat':checkboxArray[i].lat, 'lng': checkboxArray[i].lng},
              stopover: true
            });
     }
     if (waypts.length==0){
       this.alertService.wpts('please enter waypoints');
       console.log("ddddd");
     } 
     else {
     console.log("calculateAndDisplay", waypts);        
     this.vcGMD.updateDirections(); 
          
     }
     
     for (var i = 0; i < waypts.length-1; i++){
         let request = {      
         origin: new google.maps.LatLng(waypts[i].location.lat, waypts[i].location.lng),
         destination: new google.maps.LatLng(waypts[i+1].location.lat, waypts[i+1].location.lng),
         travelMode: google.maps.TravelMode.TRANSIT
        };
         console.log(request.origin, " origin");
         let map = {
            location: request.origin,
            zoom:14        
         }
         console.log(map ," map");
         directionsService.route(request, function(response, status) {
         
         directionsDisplay.setDirections(response);
         directionsDisplay.setPanel(document.getElementById('directionsPanel'));      
         console.log(response, " direction")
        });
     }    
  }
  
   //add the resturants near a new point in your trip 
  getResturants(latlng){
      
      const service = new google.maps.places.PlacesService(document.createElement('div'));
      let request = {
      location: latlng,
      radius: 1000,
      types: ["hospital"]
      };
      console.log(service.nearbySearch(request, this.callback),2222);
  }
  //callback for getResturants
  callback(results, status,data) {
        let flag:boolean;
        let names =[];
           
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          for (var i = 0; i < results.length; i++) {
           
           let hours = results[i].opening_hours
          //  console.log(results[i].rating,(results[i].name), results[i].opening_hours, results[i] );
           
           if(typeof(hours) === "undefined"){
            //  console.log('no hours shown');
           }
           else if(typeof(results[i].rating) === "undefined"){
            //  console.log("no raiting")
           }          
           else if(results[i].name!="undefined") {
             console.log(results[i].name);
             names.push(results[i].name);                
           }                        
         }         
       }
       console.log(names, self)
       if(names.length> 0){
            flag=true;
            console.log(TripComponent.prototype.isResturants)
    }
  TripComponent.prototype.publicFunc(names,flag );

     
       return names;
  }
  //add the resturants near a new point in your trip
  nearByResturant(latlng){
      
      let nearby = new google.maps.places.PlacesService(document.createElement('div'));    
      let request = {
      location: latlng,
      radius: 1000,
      types: ["hospital"]
      };
      return new Promise((resolve,reject)=>{
          nearby.nearbySearch(request,function(results,status){
           if(status === google.maps.places.PlacesServiceStatus.OK)
            {
                resolve(results);               
          }
           else
            {
                reject(status);
            }
         });
      });
  }
  
  //section for alart.compnent methods
  
  clear(){
    this.alertService.clear();
  }
  
  wpts(message: string){
        this.alertService.wpts(message);
    }

  markers: marker[] = [];
  resturants: resturant[]=[];
}
  // just an interface for type safety.
  interface marker {
	  name?: string;
    placeId: string;
    lat: number;
	  lng: number;
	  label?: string;
	  draggable: boolean;
    map?: Object;
  }

  interface resturant{
  name?:string;
  }
   
  
 
 


