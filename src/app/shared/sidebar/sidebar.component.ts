import { Component } from '@angular/core';
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
        icons:"hash",
        name:"Online Menu",
        link:"/layout/catalogue/online"
      },
      {
        icons:"Monitor",
        name:"Offline Menu",
        link:"/layout/catalogue/offline"
      }
    ]
  }

]

}
