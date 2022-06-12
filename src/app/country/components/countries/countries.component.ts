import { Component, OnInit } from '@angular/core';

import { CountriesService } from '@core/service/countries.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {

  constructor(
    private service: CountriesService
  ) { }

  ngOnInit(): void {
    this.getCountries()
  }
  getCountries() {
    this.service.getCountries()
    .subscribe(data => console.log(data))
  }

}
