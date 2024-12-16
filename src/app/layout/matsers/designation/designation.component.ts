import { Component } from '@angular/core';

@Component({
  selector: 'app-designation',
  standalone: false,
  
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.scss'
})
export class DesignationComponent {
// Dynamic column definitions
columns = [
  { key: 'id', label: 'ID' },
  { key: 'designation', label: 'Designation' },
  { key: 'status', label: 'Status' },
  { key: 'action', label: 'Action' }
];

// Dynamic table data
tableData = [
  { id: 1, designation: 'Manager',status:"Active" , action:['edit', 'view'] , mainId:'nmansajkjk12'},
  { id: 2, designation: 'Admin',status:"Active" , action:['edit', 'view'] , mainId:'nmansajkjk13'},
];


tableAction(event:any){
  console.log(event)
}
}
