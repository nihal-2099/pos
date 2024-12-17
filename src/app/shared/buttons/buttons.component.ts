import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-buttons',
  standalone: false,
  
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.scss'
})
export class ButtonsComponent {
  @Input() buttonText:any
  @Input() background:string =''
  @Output() buttonClick: any = new EventEmitter()


  buttonUpdate(item:any){
    this.buttonClick.emit(item)
  }

}
