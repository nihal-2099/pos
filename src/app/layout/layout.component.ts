import { Component } from '@angular/core';
import { ShowHideBarService } from '../services/show-hide-bar.service';

@Component({
  selector: 'app-layout',
  standalone:false,
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  isShow:boolean = true
  constructor (public showHideBarService:ShowHideBarService){
    // Subscribe to the shared message
    this.showHideBarService.updateClose.subscribe(
      (message) => this.isShow = message
    );
}

ngOnInit() {
  // Subscribe to the message
 this.isShow =  this.showHideBarService. getCurrentValue()
}
}
