import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountryComponent } from './country/country.component';
import { HttpClientModule } from '@angular/common/http';
import {CountryService} from './country.service'
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { AddcountryComponent } from './addcountry/addcountry.component'; 
import {UpdatecountryComponent} from './updatecountry/updatecountry.component';



@NgModule({
  declarations: [
    AppComponent,
    CountryComponent,
    AddcountryComponent,
    UpdatecountryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CommonModule,
    FormsModule
  ],
  providers: [CountryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
