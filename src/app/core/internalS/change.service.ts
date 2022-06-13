import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChangeService {

  private newMode: boolean = false;
  private change = new BehaviorSubject(null);

  newModeAdd$ = this.change.asObservable();

  constructor() { }

  changeMode(mode: boolean) {
    this.newMode = mode;
    this.change.next(this.newMode);
    localStorage.setItem('mode', JSON.stringify(this.newMode));
  }
}
