import {Injectable, Component, Input, EventEmitter} from '@angular/core';
import {Http, Headers, RequestOptions,Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { TripComponent } from '../components/trip/trip.component';
//import { Marker } from "../models/marker"
@Injectable()
export class ResturantListService {
    constructor(private http:Http){}
    private places: {}
    private commentsUrl = 'https://scotch-http-api.herokuapp.com/api/comments';
    public change= new EventEmitter<any>();
    getJSON() : Observable<any> {
        
         return this.http.get("/api/findings")
                         .map((response: Response) => response.json())
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

     }
    
    addComment (body: Object): Observable<Comment[]> {
        
        let bodyString = JSON.stringify(body); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option

        return this.http.post(this.commentsUrl, body, options) // ...using post request
                         .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    }   

    nearByResturant(){

    }

}
