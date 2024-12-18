import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inventory-list',
  standalone: false,
  
  templateUrl: './inventory-list.component.html',
  styleUrl: './inventory-list.component.scss'
})
export class InventoryListComponent {

    constructor(private router:Router) {}

  columns = [
    { key: 'id', label: 'ID' },
    { key: 'name', label: 'Name' },
    { key: 'configquantity', label: 'Config Quantity' },
    { key: 'createddate', label: 'Created Date' },
    { key: 'updateddate', label: 'Updated Date' },
    { key: 'action', label: 'Action' }
  ];
  
  // Dynamic table data
  tableData = [
    { id: 1, name: 'Sugar',  configquantity:'1' ,  createddate:'24-07-2024 11:50:59', updateddate:'24-08-2024 11:50:59', mainId:'nmansajkjk12' , action:['edit', 'view']},
    { id: 2, name: 'Breads',  configquantity:'1' ,  createddate:'24-07-2024 11:50:59', updateddate:'24-08-2024 11:50:59', mainId:'nmansajkjk12' , action:['edit', 'view']},
    { id: 3, name: 'Cream',  configquantity:'100' ,  createddate:'24-07-2024 11:50:59', updateddate:'24-08-2024 11:50:59', mainId:'nmansajkjk12' , action:['edit', 'view']},

  ];
  
  
  tableAction(event:any){
    if(event.type == 'edit'){
      this.router.navigate(['/layout/inventory/addraw'])

    }


  }



}
