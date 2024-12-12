import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pageheaders',
  standalone: false,
  
  templateUrl: './pageheaders.component.html',
  styleUrl: './pageheaders.component.scss'
})
export class PageheadersComponent {
  @Input() topHeadingContent:any

}
