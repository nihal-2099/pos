import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accordian',
  standalone: false,
  
  templateUrl: './accordian.component.html',
  styleUrl: './accordian.component.scss'
})
export class AccordianComponent {
  @Input() accordianItems:any

}
