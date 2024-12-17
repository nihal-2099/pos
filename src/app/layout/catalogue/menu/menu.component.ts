import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-menu',
  standalone: false,
  
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

  menucomponentform: FormGroup = new FormGroup ({

      name: new FormControl (null, [Validators.required]),
      category: new FormControl ('', [Validators.required]),
      foodType: new FormControl ('', [Validators.required]),
      serviceType: new FormControl ('', [Validators.required]),
      deliveryType: new FormControl ('', [Validators.required]),
      productType: new FormControl ('', [Validators.required]),
      itemCode: new FormControl ('', [Validators.required, Validators.pattern('^[0-9]*$')]),
      eanCode: new FormControl ('', [Validators.required, Validators.pattern('^[0-9]*$')]),
      displayOrder: new FormControl ('', [Validators.required, Validators.pattern('^[0-9]*$')]),
      preparationAs: new FormControl ('', [Validators.required]),
      hsnNo: new FormControl ('', [Validators.required, Validators.pattern('^[0-9]*$')]),
      taxType: new FormControl ( [false]), // For checkboxes, you can use a boolean
      kitchenInstructions: new FormControl ('', [ Validators.required]),
      status: new FormControl ( [false]), // For checkboxes, you can use a boolean
      minQty: new FormControl ('', [Validators.required, Validators.pattern('^[0-9]*$')]),
      maxQty: new FormControl ('', [Validators.required, Validators.pattern('^[0-9]*$')]),
      inventoryApplicable: new FormControl ( [false]),
      batchApplicable: new FormControl ( [false]),
      updateChangeInCost: new FormControl ( [false]),
      decimalsForQty: new FormControl ('', [ Validators.required]),
      abandonPercentage: new FormControl ('', [Validators.required]),
      discountType: new FormControl ('', [Validators.required]),

      costPrice: new FormControl ('', [Validators.required, Validators.pattern('^[0-9]*$')]),
      sellingPrice: new FormControl ('', [Validators.required, Validators.pattern('^[0-9]*$')]),
      discount: new FormControl ('', [Validators.required, Validators.pattern('^[0-9]*$')]),
      packingAmount: new FormControl ('', [Validators.required, Validators.pattern('^[0-9]*$')]),
      sku: new FormControl ('', [Validators.required]),
      applyForOnline: new FormControl ( [false]),

      extraToppings: new FormControl ( [false]),
      extraCream: new FormControl ( [false]),
      greenSalad: new FormControl ( [false])
  });


  formValue: any;

  onSave() {
    console.log(this.menucomponentform)
       this.formValue = this.menucomponentform.value;
  }

}
