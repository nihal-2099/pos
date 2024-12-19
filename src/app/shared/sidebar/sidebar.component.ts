import { Component } from '@angular/core';
import { ShowHideBarService } from '../../services/show-hide-bar.service';
@Component({
  selector: 'app-sidebar',
  standalone: false, 
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

sideMenuItems:Array<any> =[
  {
    main:"Main",
    items:[
      {
        icons:"grid",
        name:"Dashboard",
        link:"/layout/dashboard"
      }
    ]
  },

  {
    main:"Masters",
    icon:"cloud",
    submenu:[
      {
        icons:"map",
        name:"Company",
        link:"/layout/master/company"
      },
      {
        icons:"map",
        name:"Location",
        link:"/layout/master/location"
      },
      {
        icons:"layers",
        name:"Category",
        link:"/layout/master/category"
      },
      {
        icons:"flag",
        name:"Food Type",
        link:"/layout/master/foodtype"
      },
      {
        icons:"bookmark",
        name:"Designation",
        link:"/layout/master/designation"
      },
      {
        icons:"bookmark",
        name:"Inventory Type",
        link:"/layout/master/inventlist"
      },
     
      
    ]
  },
  {
    main:"Users",
    icon:"User",
    submenu:[
      {
        icons:"user-plus",
        name:"Add Users",
        link:"/layout/add/new"
      },
      {
        icons:"users",
        name:"List Users",
        link:"/layout/add/list"
      }
    ]
  },
  {
    main:"Catalogue",
    icon:"menu",
    submenu:[
      {
        icons:"file-plus",
        name:"Add",
        link:"/layout/catalogue/online"
      },
      {
        icons:"list",
        name:"List",
        link:"/layout/catalogue/menulist"
      }
      
    ]
  },
  {
    main:"Inventory",
    icon:"Pocket",
    submenu:[
      {
        icons:"list",
        name:"Inventory List",
        link:"/layout/inventory/invtlist"
      },
      {
        icons:"list",
        name:"Panned Inventory",
        link:"/layout/inventory/plan"
      },
  

      
    ]
  },

  {
    main:"Sales",
    icon:"send",
    submenu:[
      {
        icons:"command",
        name:"Sale",
        link:"/layout/sales/sale"
      },
      {
        icons:"crosshair",
        name:"Receipt",
        link:"/layout/sales/receipts"
      }
    ]
  },

  


]

isSlide:boolean = false


constructor (public showHideBarService:ShowHideBarService){
  // Subscribe to the shared message
  this.showHideBarService.updateSideClose.subscribe(
    (message) => this.isSlide = message
  );


}

ngOnInit() {
  // Subscribe to the message
 this.isSlide=  this.showHideBarService.getSideCurrentValue()
}
updateHeader() {
  this.showHideBarService.sideMenuClose(this.isSlide = !this.isSlide);
}
}
