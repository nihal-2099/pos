import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-food-type',
  standalone: false,
  templateUrl: './food-type.component.html',
  styleUrl: './food-type.component.scss'
})
export class FoodTypeComponent {
  foodform: FormGroup = new FormGroup(
    {
      foodtype: new FormControl('',[Validators.required]),
      status : new FormControl(true,[Validators.required])
    }
  )
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

validateTable(type:string){
  if(type == 'save'){
    console.log(this.foodform.controls)

    if(this.foodform.invalid){
      alert("Enter Required Fields!!")
      this.foodform.markAllAsTouched()
    }
    else{
      alert("done")
    }

  }
}
}
