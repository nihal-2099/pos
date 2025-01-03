import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-menu',
  standalone: false,

  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

  isPopShow: boolean = false;

  menucomponentform: FormGroup = new FormGroup({

    name: new FormControl(null, [Validators.required]),
    category: new FormControl('', [Validators.required]),
    foodType: new FormControl('', [Validators.required]),
    serviceType: new FormControl('', [Validators.required]),
    deliveryType: new FormControl('', [Validators.required]),
    productType: new FormControl('', [Validators.required]),
    itemCode: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),
    eanCode: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),
    displayOrder: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),
    preparationAs: new FormControl('', [Validators.required]),
    hsnNo: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),
    taxType: new FormControl(false), // For checkboxes, you can use a boolean
    kitchenInstructions: new FormControl('', [Validators.required]),
    status: new FormControl(false), // For checkboxes, you can use a boolean
    minQty: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),
    maxQty: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),
    inventoryApplicable: new FormControl(false),
    batchApplicable: new FormControl(false),
    updateChangeInCost: new FormControl(false),
    decimalsForQty: new FormControl('', [Validators.required]),
    abandonPercentage: new FormControl('', [Validators.required]),
    discountType: new FormControl('', [Validators.required]),

    costPrice: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),
    sellingPrice: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),
    discount: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),
    packingAmount: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),
    sku: new FormControl('', [Validators.required]),
    applyForOnline: new FormControl(false),

    regularcostPrice: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),
    regularsellingPrice: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),
    regulardiscount: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),
    regularpackingAmount: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),
    regularsku: new FormControl('', [Validators.required]),
    regularapplyForOnline: new FormControl(false),

    extraToppings: new FormControl(false),
    extraCream: new FormControl(false),
    greenSalad: new FormControl(false)
  });


  // hide and show
  isDataVisible: boolean = false;
  formValue: any;
  receivedData: string = '';


  handleData(data: string) {
    if (data == 'save') {
      alert("Done")
      this.isDataVisible = false
    }
    else if (data == 'reset') {
      this.isDataVisible = false
    }
  }


  toggleData() {
    this.isDataVisible = !this.isDataVisible; // Toggle visibility
  }

  closeModalEventMenu(event: any) {

    if (event == true) {
      this.isPopShow = false
    }

  }


  // Method to handle form submission
  submitForm(type: any): void {
    if (type == 'save') {
      if (this.menucomponentform.invalid) {
        alert('Please fill all required fields correctly.');
        this.menucomponentform.markAllAsTouched();
        this.isDataVisible = true
      } else {
        // Handle form submission logic here
        alert('Form submitted successfully!');

      }
    }
  }





}
