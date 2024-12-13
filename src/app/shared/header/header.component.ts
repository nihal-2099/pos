import { Component } from '@angular/core';
import { ShowHideBarService } from '../../services/show-hide-bar.service';

@Component({
  selector: 'app-header',
  standalone: false,
  
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
// component.ts
imagePath: any = 'assets/icon/SiteLogo.png';
isShow:boolean = false
isSide:boolean = true
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
 this.isShow=  this.showHideBarService. getCurrentValue()
 this.isSide = this.showHideBarService.getSideCurrentValue()
}

}
