import { Component } from '@angular/core';
import { FormControl, FormControlName, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  standalone: false,

  templateUrl: './add.component.html',
  styleUrl: './add.component.scss'
})
export class AddComponent {

  userform : FormGroup = new FormGroup
    (
      {
        name: new FormControl ('',[Validators.required]),
        mobile : new FormControl('',[Validators.required]),
        email : new FormControl('',[Validators.required]),
        designation : new FormControl ('',[Validators.required]),
        location : new FormControl ('',[Validators.required]),
        status : new FormControl (true ,[Validators.required]),
      }
    )

  toppings = new FormControl('');
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  
  validateTable(type:string){
    if(type == 'save'){
      console.log(this.userform.controls)

      if(this.userform.invalid){
        alert("Enter Required Fields!!")
        this.userform.markAllAsTouched()
      }
      else{
        alert("done")
      }

    }
  }

}
