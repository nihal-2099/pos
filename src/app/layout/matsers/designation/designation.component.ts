import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-designation',
  standalone: false,
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.scss',
})
export class DesignationComponent {
  designationform!: any;

  constructor(private fb: FormBuilder) {
    // Initialize the form with an empty FormArray
    this.designationform = this.fb.group({
      designation: ['', Validators.required],
      status: [true, Validators.required],
      items: this.fb.array([]), // FormArray for multiple items
    });

    this. addItem()
  }

  // Dynamic column definitions
  columns = [
    { key: 'id', label: 'ID' },
    { key: 'designation', label: 'Designation' },
    { key: 'status', label: 'Status' },
    { key: 'action', label: 'Action' },
  ];

  // Dynamic table data
  tableData = [
    {
      id: 1,
      designation: 'Manager',
      status: 'Active',
      action: ['edit', 'view'],
      mainId: 'nmansajkjk12',
    },
    {
      id: 2,
      designation: 'Admin',
      status: 'Active',
      action: ['edit', 'view'],
      mainId: 'nmansajkjk13',
    },
  ];

  tableAction(event: any) {
    console.log(event);
  }

   // Getter to access the items FormArray
   get items(): FormArray {
    return this.designationform.get('items') as FormArray;
  }

   // Method to add a new FormGroup to the FormArray
   addItem() {

    if (this.items.length > 0) {
      const lastRow = this.items.at(this.items.length - 1);
      if (lastRow.invalid) {
        alert('Please complete the current row before adding a new one.');
        return;
      }
    }
    const itemForm = this.fb.group({
      component: [null, Validators.required], // FormControl for 'name' with validation
      right: [null, [Validators.required]], // FormControl for 'quantity' with min value
    });
    this.items.push(itemForm); // Add the new FormGroup to the FormArray
  }

  removeItem(index: number) {
    this.items.removeAt(index);
  }
  validateTable(type:string){
    if(type == 'save'){
      console.log(this.designationform.controls.items)

      if(this.designationform.invalid){
        alert("Enter Required Fields!!")
        this.designationform.markAllAsTouched()
      }
      else{
        alert("done")
      }

    }
  }
}
