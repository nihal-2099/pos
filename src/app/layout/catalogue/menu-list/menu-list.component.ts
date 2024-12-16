import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-list',
  standalone: false,
  
  templateUrl: './menu-list.component.html',
  styleUrl: './menu-list.component.scss'
})
export class MenuListComponent {
// Dynamic column definitions
columns = [
  { key: 'id', label: 'ID' },
  { key: 'menu', label: 'Menu' },
  {key:'category', label:'Category'},
  {key:'foodtype', label:'Food Type'},
  { key: 'status', label: 'Status' },
  { key: 'action', label: 'Action' }
];

// Dynamic table data
tableData = [
  { id: 1,menu:'M1', category: 'Italian',foodtype:'Veg', status:"Active" , action:['edit', 'view'] , mainId:'nmansajkjk12'},
  { id: 2,menu:'M2', category: 'Chinese',foodtype:'Non-Veg',  status:"Active" , action:['edit', 'view'] , mainId:'nmansajkjk13'},
  { id: 3,menu:'M3', category: 'North Indian', foodtype:'Veg',  status:"Active" , action:['edit', 'view'] , mainId:'nmansajkjk14'},
];

constructor(private router:Router) {}


tableAction(event:any){

  if(event?.type == 'edit'){
    console.log(event)
    this.router.navigate(['/layout/catalogue/online'])
  
  }
}
}
