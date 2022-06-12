import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CountriesComponent } from './components/countries/countries.component';
import { DetailComponent } from './components/country/detail/detail.component';

const routes: Routes = [
  {
    path: '',
    component: CountriesComponent
  },
  {
    path: ':id',
    component: DetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountryRoutingModule { }
