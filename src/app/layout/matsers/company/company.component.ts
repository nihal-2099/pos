import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-company',
  standalone: false,
  
  templateUrl: './company.component.html',
  styleUrl: './company.component.scss'
})
export class CompanyComponent {

 companyform : FormGroup = new FormGroup
  (
    {
      companyname: new FormControl ('',[Validators.required]),
      emailaddress: new FormControl ('',[Validators.required]),
      mobile: new FormControl ('',[Validators.required,Validators.min(10),Validators.max(10)]),
      state : new FormControl('',[Validators.required]),
      district : new FormControl('',Validators.required),
      block : new FormControl ('',[Validators.required]),
      status : new FormControl (true,[Validators.required])
    }
  )

  // Dynamic column definitions
columns = [
  { key: 'id', label: 'ID' },
  { key: 'name', label: 'Company Name' },
  { key: 'state', label: 'State' },
  { key: 'emailaddress', label: 'Email Address' },
  { key: 'mobileno', label: 'Mobile No.' },
  { key: 'status', label: 'Status' },
  { key: 'action', label: 'Action' }
];

// Dynamic table data
  tableData = [
    { id: 1, name: 'company 1', state: 'Delhi', emailaddress: 'xyz@gmail.com', mobileno:90989876, status:"Active" , action:['edit', 'view'] , mainId:'nmansajkjk12'},
    { id: 2, name: 'company 2', state: 'Uttar Pardesh', emailaddress: 'abc@gmail.com', mobileno:897876453, status:"Disabled" , action:['edit', 'view'], mainId:'nmansajkjk13' },
    { id: 3, name: 'company 3', state: 'Uttar Pardesh', emailaddress: 'lmn@gmail.com', mobileno:677890097, status:"Active", action:['edit', 'view'] , mainId:'nmansajkjk14' },
  ];
  
  
  tableAction(event:any){
    console.log(event)
  }

  validateTable(type:string){
    if(type == 'save'){
      console.log(this.companyform.controls)
  
      if(this.companyform.invalid){
        alert("Enter Required Fields!!")
        this.companyform.markAllAsTouched()
      }
      else{
        alert("done")
      }
  
    }
  }
}
