import { Component, OnInit } from '@angular/core';

import { ChangeService } from '@core/internalS/change.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isDark = false;
  constructor(
    private change: ChangeService
  ) { }

  ngOnInit(): void {
    try {
      const data = JSON.parse(localStorage.getItem('mode'));
      if(data) {
        this.isDark = true;
      };
    } catch (error) {
      console.log(error);
    }
  }
  changeMode() {
    try {
      const data = JSON.parse(localStorage.getItem('mode'))
      if(data) {
        this.isDark = false;
        this.change.changeMode(false);
      } else {
        this.isDark = true;
        this.change.changeMode(true);
      };
    } catch (error) {
      console.log(error);
    }
  }

}
