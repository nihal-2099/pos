import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShowHideBarService {


  // BehaviorSubject with initial value
  private isClose = new BehaviorSubject<boolean>(true);
  updateClose = this.isClose.asObservable();

  constructor() {}

  // Change the message
  changeMenu(update: boolean) {
    this.isClose.next(update);
    sessionStorage.setItem('header', JSON.stringify(update))
  }


  getCurrentValue(){
    return sessionStorage.getItem('header')  ? JSON.parse(sessionStorage.getItem('header') || '') : true
  }
}
