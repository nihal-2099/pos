import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-booking-table',
  standalone: false,
  
  templateUrl: './booking-table.component.html',
  styleUrl: './booking-table.component.scss'
})
export class BookingTableComponent {
  form : FormGroup = new FormGroup
  ({
    tablename : new FormControl('',[Validators.required]),
    area : new FormControl(null,[Validators.required]),
    company: new FormControl(null,[Validators.required]),
    branch: new FormControl(null,[Validators.required]),

    status: new FormControl(true,[Validators.required])
  })
  // Dynamic column definitions
  columns = [
    { key: 'id', label: 'ID' },
    { key: 'table', label: 'Table Name' },
    { key: 'area', label: 'Table Area' },
    { key: 'company', label: 'Company Name' },
    { key: 'branch', label: 'Branch Name' },
    { key: 'status', label: 'Status' },
    { key: 'action', label: 'Action' }
  ];
  
  // Dynamic table data
  tableData = [
    { id: 1, table: 'Table 1', area:'A/C', company:'Company 1', branch:'Branch 1',status:"Active" , action:['edit', 'view'] , mainId:'nmansajkjk12'},
    { id: 2, table: 'Table 1',area:'A/C',company:'Company 2',branch:'Branch 1',status:"Active" , action:['edit', 'view'] , mainId:'nmansajkjk13'},
    { id: 3, table: 'Table 1',area:'Oudoor',company:'Company 3',branch:'Branch 1',status:"Active" , action:['edit', 'view'] , mainId:'nmansajkjk14'},
    { id: 4, table: 'Table 2', area:'Oudoor',company:'Company 1', branch:'Branch 1',status:"Active" , action:['edit', 'view'] , mainId:'nmansajkjk12'},
    { id: 5, table: 'Table 3', area:'Gallery',company:'Company 1', branch:'Branch 1',status:"Active" , action:['edit', 'view'] , mainId:'nmansajkjk12'},

  ];
  
  
  tableAction(event:any){
    console.log(event)
  }  
  
  validateTable(type:string){
    if(type == 'save'){
      console.log(this.form.controls)
  
      if(this.form.invalid){
        alert("Enter Required Fields!!")
        this.form.markAllAsTouched()
      }
      else{
        alert("done")
      }
  
    }
  }
  }
  
  
  