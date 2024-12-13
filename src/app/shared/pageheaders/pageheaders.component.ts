import { Component, Input } from '@angular/core';
import { ShowHideBarService } from '../../services/show-hide-bar.service';

@Component({
  selector: 'app-pageheaders',
  standalone: false,
  
  templateUrl: './pageheaders.component.html',
  styleUrl: './pageheaders.component.scss'
})
export class PageheadersComponent {
  @Input() topHeadingContent:any;
  isHide:boolean =true

  constructor (public showHideBarService:ShowHideBarService){}


  updateHeader() {
    this.showHideBarService.changeMenu(this.isHide = !this.isHide);
  }
  ngOnInit() {
    // Subscribe to the message
   this.isHide=  this.showHideBarService. getCurrentValue()
  }
}
