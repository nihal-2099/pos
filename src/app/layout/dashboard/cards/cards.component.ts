import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  standalone: false,
  
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent {

  @Input() cardsData:any;
  @Input() type:string = ''

}
