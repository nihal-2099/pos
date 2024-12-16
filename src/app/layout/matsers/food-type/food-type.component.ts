import { Component } from '@angular/core';

@Component({
  selector: 'app-food-type',
  standalone: false,
  
  templateUrl: './food-type.component.html',
  styleUrl: './food-type.component.scss'
})
export class FoodTypeComponent {
// Dynamic column definitions
columns = [
  { key: 'id', label: 'ID' },
  { key: 'food', label: 'Food Type' },
  { key: 'status', label: 'Status' },
  { key: 'action', label: 'Action' }
];

// Dynamic table data
tableData = [
  { id: 1, food: 'Veg',status:"Active" , action:['edit', 'view'] , mainId:'nmansajkjk12'},
  { id: 2, food: 'Non-Veg',status:"Active" , action:['edit', 'view'] , mainId:'nmansajkjk13'},
];


tableAction(event:any){
  console.log(event)
}
}
