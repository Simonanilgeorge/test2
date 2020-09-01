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

  getcountry():Observable<any>{
    return this.http.get<any>(this.url);
  }
//function to add new values
// addcountry(COUNTRY:country){


//   console.log(`function to add data in service file  is called with values${Object.entries(COUNTRY)} `);
//  this.http.post<country>(this.url,COUNTRY)
//   //perform a post request
// }


addcountry(COUNTRY:any): Observable<any>
 {
   
  return this.http.post<any>(this.url,COUNTRY);

}


deletecountry(CODE:any): Observable<{}> {
  console.log(`the code to be deleted is ${CODE}`);
  const URL = `${this.url}/${CODE}`; 
  console.log(`the new url is ${URL}`)
  return this.http.delete(URL);
}
}