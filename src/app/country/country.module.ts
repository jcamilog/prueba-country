import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountryRoutingModule } from './country-routing.module';
import { CountriesComponent } from './components/countries/countries.component';
import { DetailComponent } from './components/country/detail/detail.component';

import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    CountriesComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    CountryRoutingModule,
    SharedModule,
  ]
})
export class CountryModule { }
