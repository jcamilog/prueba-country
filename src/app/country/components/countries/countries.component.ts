import { Component, OnInit } from '@angular/core';

import { CountriesService } from '@core/service/countries.service';
import { ChangeService } from '@core/internalS/change.service';
import { Country } from '@models/country.model';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {

  public countries: any = [];
  public isDark = false;
  isExpancion = false;
  searchCountries = '';
  logMode = JSON.parse(localStorage.getItem('mode'));
  continents = [
    {"name": "Africa"},
    {"name": "Americas"},
    {"name": "Asia"},
    {"name": "Europe"},
    {"name": "Oceania"},
  ]
  constructor(
    private service: CountriesService,
    private changeService: ChangeService
  ) { }

  ngOnInit(): void {
    this.getCountries();
    this.mode();
    this.validationLog();
  }
  validationLog() {
    try {
      if(this.logMode) {
        this.isDark = true;
      }
    } catch (error) {
      console.log(error);
    }
  }
  mode() {
    this.changeService.newModeAdd$
    .subscribe(data => {
      if(data === false) {
        this.isDark = data;
      }else if (data){
        this.isDark = data;
      };
    });
  }
  getCountries() {
    this.service.getCountries()
    .subscribe((data) => {
      this.countries = data;
    });
  }
  getCountriesByContinent(continent: string) {
    this.countries = [];
    this.service.getContinent(continent.toLocaleLowerCase())
    .subscribe(data => {
      this.countries = data;
    })
  }
  expancion() {
    this.isExpancion ? this.isExpancion = false : this.isExpancion = true;
  }
}
