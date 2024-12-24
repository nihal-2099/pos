import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sale-cards',
  standalone: false,
  
  templateUrl: './sale-cards.component.html',
  styleUrl: './sale-cards.component.scss'
})
export class SaleCardsComponent {
@Input() itemsDetails:any
@Output() addToCart:any = new EventEmitter()
@Input() isTableSelect:boolean = false
}
