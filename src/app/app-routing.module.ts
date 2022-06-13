import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'countries',
        pathMatch: 'full'
      },
      {
        path: 'countries',
        loadChildren: () => import ('./country/country.module').then(m => m.CountryModule)
      },
      {
        path: '**',
        loadChildren: () => import ('./country/country.module').then(m => m.CountryModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
