import { Component } from '@angular/core';

@Component({
  selector: 'app-locations',
  standalone: false,
  
  templateUrl: './locations.component.html',
  styleUrl: './locations.component.scss'
})
export class LocationsComponent {

// Dynamic column definitions
columns = [
  { key: 'id', label: 'ID' },
  { key: 'name', label: 'Location Name' },
  { key: 'state', label: 'State' },
  { key: 'district', label: 'District' },
  { key: 'block', label: 'Block' },
  { key: 'status', label: 'Status' },
  { key: 'action', label: 'Action' }
];

// Dynamic table data
tableData = [
  { id: 1, name: 'Branch 1', state: 'Delhi', district: 'Delhi', block:"CP", status:"Active" , action:['edit', 'view'] , mainId:'nmansajkjk12'},
  { id: 2, name: 'Branch 2', state: 'Uttar Pardesh', district: 'Lucknow', block:"Main Market", status:"Disabled" , action:['edit', 'view'], mainId:'nmansajkjk13' },
  { id: 3, name: 'Branch 3', state: 'Uttar Pardesh', district: 'Kanpur', block:"Main Market", status:"Active", action:['edit', 'view'] , mainId:'nmansajkjk14' },
];


tableAction(event:any){
  console.log(event)
}


}
