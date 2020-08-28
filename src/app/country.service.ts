import { Injectable } from '@angular/core';
import {country} from './country';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

//import observables,interface,http client


@Injectable({
  providedIn: 'root'
})
export class CountryService {
//create an instance for the http client

  constructor(private http:HttpClient) { }

  //create a function to fetch the data
  //create a variable url to get use the url

  private url:string="https://trn.api.alqasim.net/country";

  getcountry():Observable<country[]>{
    return this.http.get<country[]>(this.url);
  }
}
