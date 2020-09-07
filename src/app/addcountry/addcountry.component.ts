import { Component, OnInit } from '@angular/core';
import {CountryService } from '../country.service';
import { BrowserModule } from '@angular/platform-browser';
import {country} from '../country';

@Component({
  selector: 'addcountry',
  templateUrl: './addcountry.component.html',
  styleUrls: ['./addcountry.component.css']
})
export class AddcountryComponent implements OnInit {


  public countries:country[]=[];
  public country:country={
      name:null,
      code:null,
      alpha2Code:null,
      alpha3Code:null,
    
    };

    constructor(private countryservice:CountryService) { 
      //   this.country={
      //     name:null,
      //     code:null,
      //     alpha2Code:null,
      //     alpha3Code:null,
      // };
      }
      
      ngOnInit():void 
      {
      this.getcountry();
      }
      
        //function to get countries
        getcountry()
        {
          this.countryservice.getcountry()
          .subscribe(data=>this.countries=data);
        }
    //create a function to add countries
    add(){
      //add all variables to newcountry and call the function to add the values
      
  
      // this.country.name=name;
      // this.country.code=code;
      // this.country.alpha2Code=alpha2Code;
      // this.country.alpha3Code=alpha3Code;
  
  console.log(`country type is ${typeof(this.country)}`);
  console.log( Object.entries(this.country));
  
  
  //call a function to post the data
  this.countryservice.addcountry(this.country)
  .subscribe(country => {
    this.countries.push(country);
  });
  
  this.reset();
  
 }


 reset(){
    this.country={
      name:null,
      code:null,
      alpha2Code:null,
      alpha3Code:null,
  };
}

}
