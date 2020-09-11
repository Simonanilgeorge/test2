import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddcountryComponent} from './addcountry/addcountry.component';
import {CountryComponent} from './country/country.component';
import {UpdatecountryComponent} from './updatecountry/updatecountry.component'
const routes: Routes = [ 
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: CountryComponent },
{ path: 'addcountry', component: AddcountryComponent},
{path:'updatecountry/:code',component:UpdatecountryComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
