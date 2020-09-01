import { Component, OnInit } from '@angular/core';
import {CountryService } from '../country.service';
import { BrowserModule } from '@angular/platform-browser';
import {country} from '../country';
@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

public countries:any=[];
//variable to store the new countries
// public newcountry:country[]=[];
public newcountry:any=[];

  constructor(private countryservice:CountryService) { }


  //create a service to fetch the data ffrom the url
  //get the data from the countries in countrty.component and display it
  //call the getcountry function using the service

  ngOnInit(): void {

    //fetch the data from getcountry function in servive file
    this.countryservice.getcountry()
    .subscribe(data=>this.countries=data);

  }

  //create a function to add countries
  add(NAME,CODE,ALPHA2CODE,ALPHA3CODE){
    //add all variables to newcountry and call the function to add the values
 console.log(`the returned values are ${NAME}`)
 console.log(`the returned values are ${CODE}`)
 console.log(`the returned values are ${ALPHA2CODE}`)
 console.log(`the returned values are ${ALPHA3CODE}`)
 this.newcountry.code=CODE;
 this.newcountry.name=NAME;
this.newcountry.alpha2Code=ALPHA2CODE;
this.newcountry.alpha3Code=ALPHA3CODE; 


//call a function to post the data
this.countryservice
  .addcountry(this.newcountry)
  .subscribe(count => this.countries.push(this.newcountry));

}


delete(CODE){
this.countryservice
  .deletecountry(CODE)
  .subscribe();
}
}