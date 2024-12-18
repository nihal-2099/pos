import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-category',
  standalone: false,
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent {
categorycomponent : FormGroup = new FormGroup
({
  categoryname : new FormControl('',[Validators.required]),
  status: new FormControl(true,[Validators.required])
})
// Dynamic column definitions
columns = [
  { key: 'id', label: 'ID' },
  { key: 'category', label: 'Category Name' },
  { key: 'status', label: 'Status' },
  { key: 'action', label: 'Action' }
];

// Dynamic table data
tableData = [
  { id: 1, category: 'Italian',status:"Active" , action:['edit', 'view'] , mainId:'nmansajkjk12'},
  { id: 2, category: 'Chinese',status:"Active" , action:['edit', 'view'] , mainId:'nmansajkjk13'},
  { id: 3, category: 'North Indian',status:"Active" , action:['edit', 'view'] , mainId:'nmansajkjk14'},
];


tableAction(event:any){
  console.log(event)
}  

validateTable(type:string){
  if(type == 'save'){
    console.log(this.categorycomponent.controls)

    if(this.categorycomponent.invalid){
      alert("Enter Required Fields!!")
      this.categorycomponent.markAllAsTouched()
    }
    else{
      alert("done")
    }

  }
}
}


