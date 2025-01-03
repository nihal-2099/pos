import { Component } from '@angular/core';
import { ShowHideBarService } from '../services/show-hide-bar.service';
import Common from '../common/common';

@Component({
  selector: 'app-layout',
  standalone:false,
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  isShow:boolean = true
  isSide:boolean = true
  hideSideBar:boolean = Common.sideShow()
  constructor (public showHideBarService:ShowHideBarService){
    // Subscribe to the shared message
    this.showHideBarService.updateClose.subscribe(
      (message) => this.isShow = message
    );

    this.showHideBarService.updateSideClose.subscribe(
      (sideupdate) => this.isSide = sideupdate
    )
}

ngOnInit() {
  // Subscribe to the message
 this.isShow = this.showHideBarService.getCurrentValue()
 this.isSide = this.showHideBarService.getSideCurrentValue()
}

}
