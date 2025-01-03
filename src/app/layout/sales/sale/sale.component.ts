import { Component, OnChanges } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { NgxPrintService, PrintOptions } from 'ngx-print';

@Component({
  selector: 'app-sale',
  standalone: false,

  templateUrl: './sale.component.html',
  styleUrl: './sale.component.scss',
})
export class SaleComponent implements OnChanges {
  categoryData: Array<any> = [
    { categoryname: 'Italian Cuisine', id: 2 },
    { categoryname: 'Chinese', id: 3 },
    { categoryname: 'North Indian	', id: 4 },
  ];

  foodItems: Array<any> = [
    {
      itemname: 'Pizza Napoletana',
      parent_id: 2,
      itemid: 'item1',
      image: 'assets/images/item/pizza.webp',
      price: 650,
    },
    {
      itemname: 'Polenta',
      parent_id: 2,
      itemid: 'item2',
      image: 'assets/images/item/polenta.webp',
      price: 500,
    },
    {
      itemname: 'Ribollita',
      parent_id: 2,
      itemid: 'item3',
      image: 'assets/images/item/ribollita.webp',
      price: 700,
    },
    {
      itemname: 'Cotoletta alla Milanese',
      parent_id: 2,
      itemid: 'item8',
      image: 'assets/images/item/cotoletta.webp',
      price: 980,
    },
    {
      itemname: 'Risotto alla Milanese',
      parent_id: 2,
      itemid: 'item7',
      image: 'assets/images/item/risotto.webp',
      price: 1700,
    },

    {
      itemname: 'Dim Sum',
      parent_id: 3,
      itemid: 'item4',
      image: 'assets/images/item/dimsumb.webp',
      price: 300,
    },

    {
      itemname: 'Kadhi Pakora',
      parent_id: 4,
      itemid: 'item4',
      image: 'assets/images/item/kadhi-pakora.webp',
      price: 700,
    },
    {
      itemname: 'Kadai Paneer',
      parent_id: 4,
      itemid: 'item5',
      image: 'assets/images/item/kadai.webp',
      price: 700,
    },
    {
      itemname: 'Palak Paneer',
      parent_id: 4,
      itemid: 'item6',
      image: 'assets/images/item/palak.webp',
      price: 450,
    },
  ];
  selectCrusine: number = 2;
  selectedTable: any = sessionStorage.getItem('tableselect')
    ? JSON.parse(sessionStorage.getItem('tableselect') || '')
    : '';
  filetredItems: Array<any> = [];
  isTableSelect: boolean =
    sessionStorage.getItem('tableselect') ||
    sessionStorage.getItem('delivery') ||
    sessionStorage.getItem('take')
      ? false
      : true;
  orderType: any;
  orderForm: any;
  tableName: string =
    this.selectedTable?.tableno?.toString() +
    this.selectedTable?.area?.toString();
  otherType: string = sessionStorage.getItem('delivery')
    ? 'delivery'
    : sessionStorage.getItem('take')
    ? 'take'
    : '';
    isPrinting:boolean = false

  constructor(private fb: FormBuilder, private printService: NgxPrintService) {
    this.orderForm = this.fb.group({
      items: this.fb.array([]),
    });
  }

  ngOnInit() {
    this.filterItem(this.selectCrusine);
    this.seOldItems();
    // console.log(this.tableName)
  }

  ngOnChanges() {}

  tableSelectedDetails(event: any) {
    this.tableName = event?.tableno.toString() + event?.area.toString();
    this.isTableSelect = false;
    this.selectedTable = event;
    this.otherType = '';
    sessionStorage.setItem('tableselect', JSON.stringify(event));
    this.seOldItems();
  }

  filterItem(event: any) {
    let food = this.foodItems;
    this.filetredItems = food.filter(
      (res: any) => res?.parent_id == this.selectCrusine
    );
  }

  get items(): FormArray {
    return this.orderForm.get('items') as FormArray;
  }

  addItem(items: any): void {
    let alreadyItems = this.items;
    let checkAlready = alreadyItems.value.findIndex(
      (item: any) => item.itemid === items?.itemid
    );
    if (checkAlready != -1) {
      this.increaseQuantity(checkAlready);
    } else {
      const item = this.fb.group({
        itemname: [items?.itemname, Validators.required],
        itemid: [items?.itemid, Validators.required],
        quantity: [1, Validators.required],
        price: [items?.price, Validators.required], // FormArray for multiple items
        table: [this.selectedTable?.tableno + this.selectedTable?.area],
      });
      this.items.push(item);
    }
  }

  removeItem(index: number) {
    this.items.removeAt(index);
    this.sessionUpdate();
  }

  getDetails(event: any) {
    this.addItem(event);
    this.sessionUpdate();
  }

  increaseQuantity(index: number): void {
    const currentQuantity = this.items.at?.(index).get('quantity')?.value;
    console.log(currentQuantity);
    this.items
      .at?.(index)
      .get('quantity')
      ?.setValue(currentQuantity + 1);
    this.sessionUpdate();
  }

  decreaseQuantity(index: number): void {
    const currentQuantity = this.items.at(index).get('quantity')?.value;
    if (currentQuantity > 1) {
      this.items
        .at?.(index)
        .get('quantity')
        ?.setValue(currentQuantity - 1);
      this.sessionUpdate();
    }
  }

  sessionUpdate() {
    let Itemsvalue = this.items?.value;
    let oldItems: any = this.getSession();
    // oldItems = Itemsvalue
    if (oldItems) {
      oldItems?.forEach((element: any) => {
        if (element.table == this.tableName) {
          oldItems.push(this.items?.value);
        }
      });
    }

    // this.selectedTable?.tableno+this.selectedTable?.area
    sessionStorage.setItem(
      this.otherType ? this.otherType : this.tableName,
      JSON.stringify(Itemsvalue)
    );
  }

  getSession() {
    let session = sessionStorage.getItem(
      this.otherType ? this.otherType : this.tableName
    )
      ? JSON.parse(
          sessionStorage.getItem(
            this.otherType ? this.otherType : this.tableName
          ) || ''
        )
      : null;
    return session;
  }

  seOldItems() {
    let prefilledTable = [];
    this.orderForm.reset();
    console.log(this.getSession());
    this.orderForm = this.fb.group({
      items: this.fb.array([]),
    });
    if (this.getSession()) {
      prefilledTable = this.otherType
        ? this.getSession()
        : this.getSession()?.filter((res: any) => res.table == this.tableName);
      prefilledTable?.forEach((element: any) => {
        this.addItem(element);
      });
    }
  }

  calculateTotal() {
    return this.items.controls.reduce((total, item) => {
      const price = item.get('price')?.value || 0;
      const quantity = item.get('quantity')?.value || 0;
      return total + price * quantity;
    }, 0);
  }
  selectTable() {
    this.orderForm.reset();
    this.isTableSelect = !this.isTableSelect;
  }

  selectType(type: string) {
    this.otherType = type;
    this.isTableSelect = false;
    this.selectedTable = '';
    sessionStorage.removeItem('tableselect');
    this.seOldItems();
  }

  calculateTotatl() {
    let Itemsvalue = this.items?.value;
    return Itemsvalue.reduce((sum: any, item: any) => sum + item.price, 0);
  }

  printMe() {
    this.isPrinting = true

    setTimeout(()=>{
    const customPrintOptions: PrintOptions = new PrintOptions({
      printSectionId: 'print-section',
      // Add any other print options as needed
    });
    this.printService.print(customPrintOptions);

   
      this.isPrinting =false
    },300)
  }
}
