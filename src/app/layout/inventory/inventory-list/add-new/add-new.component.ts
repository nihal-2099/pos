import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-new',
  standalone: false,
  
  templateUrl: './add-new.component.html',
  styleUrl: './add-new.component.scss'
})
export class AddNewComponent {

 

   addnewinventory: FormGroup = new FormGroup ({
  
        branch: new FormControl (null, [Validators.required]),
        inventory: new FormControl (null, [Validators.required]),
        mfg: new FormControl (null, [Validators.required]),
        exp: new FormControl (null, [Validators.required]),
        unit: new FormControl (null, [Validators.required]),
        quantity: new FormControl ('', [Validators.required]),
      
        
        status: new FormControl ( false)
    });
  
  
    formValue: any;
  
     // Method to handle form submission
     submitForm(type:any): void {
      console.log(type)
      if(type == 'save'){
        if (this.addnewinventory.invalid) {
          alert('Please fill all required fields correctly.');
          this.addnewinventory.markAllAsTouched()
  
        } else {
          // Handle form submission logic here
          alert('Form submitted successfully!');
        }
  
      }
   
    }
  
    constructor(public location:Location){}
}
