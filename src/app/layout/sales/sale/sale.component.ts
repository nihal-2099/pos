import { Component } from '@angular/core';

@Component({
  selector: 'app-sale',
  standalone: false,
  
  templateUrl: './sale.component.html',
  styleUrl: './sale.component.scss'
})
export class SaleComponent {
  categoryData:Array<any> = [
    {categoryname:'Italian Cuisine', id:2},
    {categoryname:'Chinese', id:3},
    {categoryname:'North Indian	', id:4},
  ]

  foodItems:Array<any> =[
    {itemname:'Pizza Napoletana', parent_id:2, itemid:"item1" , image:'assets/images/item/pizza.webp', price:650},
    {itemname:'Polenta', parent_id:2, itemid:"item2", image:'assets/images/item/polenta.webp', price:500},
    {itemname:'Ribollita', parent_id:2, itemid:"item3", image:'assets/images/item/ribollita.webp', price:700},
    {itemname:'Cotoletta alla Milanese', parent_id:2, itemid:"item8", image:'assets/images/item/cotoletta.webp', price:980},
    {itemname:'Risotto alla Milanese', parent_id:2, itemid:"item7", image:'assets/images/item/risotto.webp', price:1700},

    {itemname:'Dim Sum', parent_id:3, itemid:"item4", image:'assets/images/item/dimsumb.webp', price:300},
    
    {itemname:'Kadhi Pakora', parent_id:4, itemid:"item4", image:'assets/images/item/kadhi-pakora.webp', price:700},
    {itemname:'Kadai Paneer', parent_id:4, itemid:"item5", image:'assets/images/item/kadai.webp', price:700},
    {itemname:'Palak Paneer', parent_id:4, itemid:"item6", image:'assets/images/item/palak.webp', price:450},

   
  ]
  selectCrusine:number = 2
  selectedTable:any = JSON.parse(sessionStorage.getItem('tableselect')|| '')
  filetredItems:Array<any> =[]
  isTableSelect:boolean = sessionStorage.getItem('tableselect') ? false : true

  ngOnInit(){
    this.filterItem(this.selectCrusine)
    
  }


  tableSelectedDetails(event:any){
    this.isTableSelect = false
    this.selectedTable = event
    sessionStorage.setItem('tableselect', JSON.stringify(event))
    console.log(event)
  }


  filterItem(event:any){
    let food = this.foodItems
    this.filetredItems = food.filter((res:any)=> res?.parent_id == this.selectCrusine)
  }
  
  getDetails(event:any){
    console.log(event)
  }
}
