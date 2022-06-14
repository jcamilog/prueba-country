import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { CountriesService } from '@core/service/countries.service';
import { ChangeService } from '@core/internalS/change.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  public isDark = false;
  country: any = [];
  logMode = JSON.parse(localStorage.getItem('mode'));

  constructor(
    private route: ActivatedRoute,
    private service: CountriesService,
    private changeService: ChangeService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((param: any) => {
      const name = param.name;
      this.getCountry(name)
    });
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
  getCountry(name:  string): void{
    this.service.getCountryForName(name)
    .subscribe({
      next: (data) => {
        this.country = data;
      },
      error: (error) => console.log(error)
    });
  }
}
