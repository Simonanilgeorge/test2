import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountryComponent } from './country/country.component';
import { HttpClientModule } from '@angular/common/http';
import {CountryService} from './country.service'
import { CommonModule } from "@angular/common";



@NgModule({
  declarations: [
    AppComponent,
    CountryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [CountryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
