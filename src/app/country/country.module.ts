import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CountryRoutingModule } from './country-routing.module';
import { CountriesComponent } from './components/countries/countries.component';
import { DetailComponent } from './components/country/detail/detail.component';
import { SearchPipe } from '@utils/pipes/search.pipe'


@NgModule({
  declarations: [
    CountriesComponent,
    DetailComponent,
    SearchPipe
  ],
  imports: [
    CommonModule,
    CountryRoutingModule,
    FormsModule
  ]
})
export class CountryModule { }
