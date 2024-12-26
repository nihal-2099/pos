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
isDark:boolean = false
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
 this.isDark = JSON.parse(sessionStorage.getItem('isdark') || '')
 this.lightDarkTheme('')

}

lightDarkTheme(event:any){
  const body = document.body;
  if (this.isDark) {
    body.classList.remove('light-theme');
    body.classList.add('dark-theme');
    sessionStorage.setItem('isdark', JSON.stringify(this.isDark))
  } else {
    body.classList.remove('dark-theme');
    body.classList.add('light-theme');
    sessionStorage.setItem('isdark', JSON.stringify(this.isDark))

  }
}

}
