import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-fields',
  standalone: false,
  
  templateUrl: './fields.component.html',
  styleUrl: './fields.component.scss'
})
export class FieldsComponent {

  @Input() Fields:any

}
