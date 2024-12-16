import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-buttons',
  standalone: false,
  
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.scss'
})
export class ButtonsComponent {
  @Input() buttonText:any
  @Input() background:string =''

}
