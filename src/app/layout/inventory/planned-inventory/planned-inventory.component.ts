import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-planned-inventory',
  standalone: false,
  
  templateUrl: './planned-inventory.component.html',
  styleUrl: './planned-inventory.component.scss'
})
export class PlannedInventoryComponent {





  constructor(private router:Router) {}

  columns = [
    { key: 'id', label: 'ID' },
    { key: 'name', label: 'Name' },
    { key: 'variant', label: 'Variant' },
    { key: 'configquantity', label: 'Config Quantity' },
    { key: 'createddate', label: 'Created Date' },
    { key: 'updateddate', label: 'Updated Date' },
    { key: 'action', label: 'Action' }
  ];
  
  // Dynamic table data
  tableData = [
    { id: 1, name: 'Alloo Tikki', variant:"Regular"  , configquantity:'1' ,  createddate:'24-07-2024 11:50:59', updateddate:'24-08-2024 11:50:59', mainId:'nmansajkjk12' , action:['edit', 'view']},
    { id: 2, name: 'Cake 1Kg', variant:"Regular"  , configquantity:'1' ,  createddate:'24-07-2024 11:50:59', updateddate:'24-08-2024 11:50:59', mainId:'nmansajkjk12' , action:['edit', 'view']},
    { id: 3, name: 'Cakemomn Choco', variant:"500 grams"  , configquantity:'100' ,  createddate:'24-07-2024 11:50:59', updateddate:'24-08-2024 11:50:59', mainId:'nmansajkjk12' , action:['edit', 'view']},

  ];
  
  
  tableAction(event:any){
    if(event.type == 'edit'){
      this.router.navigate(['/layout/inventory/addraw'])

    }
    console.log(event)
  }
}
