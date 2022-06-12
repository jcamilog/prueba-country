import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { CountriesService } from '@core/service/countries.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private service: CountriesService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((param: any) => {
      const name = param.name
      console.log(name);
      this.getCountry(name)
    })
  }
  getCountry(name:  string): void{
    this.service.getCountryForName(name)
    .subscribe(data => {
      console.log(data)
    }, err => {
      console.log(err);
    })
  }

}
