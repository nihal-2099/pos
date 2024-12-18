import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-invent-list',
  standalone: false,

  templateUrl: './invent-list.component.html',
  styleUrl: './invent-list.component.scss'
})
export class InventListComponent {

  inventorytypeform: FormGroup = new FormGroup
    (
      {
        inventname: new FormControl('', [Validators.required]),
        checkbox: new FormControl(false)
      }
    )

  // Dynamic column definitions
  columns = [
    { key: 'id', label: 'ID' },
    { key: 'name', label: 'Name' },
    { key: 'doc', label: 'Created Date' },
    { key: 'status', label: 'Status' },
    { key: 'action', label: 'Action' }
  ];

  // Dynamic table data
  tableData = [
    { id: 1, name: 'Branch 1', doc: "2024", status: "Active", action: ['edit', 'view'], mainId: 'nmansajkjk12' },
    { id: 2, name: 'Branch 2', doc: "2024" , status: "Disabled", action: ['edit', 'view'], mainId: 'nmansajkjk13' },
    { id: 3, name: 'Branch 3', doc: "2024", status: "Active", action: ['edit', 'view'], mainId: 'nmansajkjk14' },
  ];


  tableAction(event: any) {
    console.log(event)
  }
  validateTable(type: string) {
    if (type == 'save') {
      console.log(this.inventorytypeform.controls)

      if (this.inventorytypeform.invalid) {
        alert("Enter Required Fields!!")
        this.inventorytypeform.markAllAsTouched()
      }
      else {
        alert("done")
      }

    }
  }

}
