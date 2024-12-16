import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  standalone: false,
  
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})



export class ListComponent {
// Dynamic column definitions
columns = [
  { key: 'id', label: 'ID' },
  { key: 'name', label: 'Name' },
  { key: 'designation', label: 'Designation' },
  { key: 'location', label: 'Location' },
  { key: 'status', label: 'Status' },
  { key: 'action', label: 'Action' }
];

// Dynamic table data
tableData = [
  { id: 1, name: 'Ritin', designation:'Manager', location:"Branch 1",status:"Active" , action:['edit', 'view'] , mainId:'nmansajkjk12'},
  { id: 2, name: 'Sanjeev',  designation:'Operator', location:"Branch 2", status:"Disabled" , action:['edit', 'view'] , mainId:'nmansajkjk13'},
  { id: 2, name: 'Rohit',  designation:'Admin', location:"Branch 1", status:"Active" , action:['edit', 'view'] , mainId:'nmansajkjk13'},
];


tableAction(event:any){
  console.log(event)
}

}
