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

public countries:any=[]

  constructor(private countryservice:CountryService) { }


  //create a service to fetch the data ffrom the url
  //get the data from the countries in countrty.component and display it
  //call the getcountry function using the service

  ngOnInit(): void {

    //fetch the data from getcountry function in servive file
    this.countryservice.getcountry()
    .subscribe(data=>this.countries=data);
  



  }


}
