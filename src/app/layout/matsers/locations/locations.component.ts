import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-locations',
  standalone: false,
  
  templateUrl: './locations.component.html',
  styleUrl: './locations.component.scss'
})
export class LocationsComponent {

  locationform : FormGroup = new FormGroup
  (
    {
      locationname: new FormControl ('',[Validators.required]),
      latitude: new FormControl ('',[Validators.required]),
      longitude: new FormControl ('',[Validators.required]),
      state : new FormControl('',[Validators.required]),
      district : new FormControl('',Validators.required),
      block : new FormControl ('',[Validators.required]),
      status : new FormControl (true,[Validators.required])
    }
  )

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
validateTable(type:string){
  if(type == 'save'){
    console.log(this.locationform.controls)

    if(this.locationform.invalid){
      alert("Enter Required Fields!!")
      this.locationform.markAllAsTouched()
    }
    else{
      alert("done")
    }

  }
}

}
