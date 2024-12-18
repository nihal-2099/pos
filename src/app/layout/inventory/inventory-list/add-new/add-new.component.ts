import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-new',
  standalone: false,
  
  templateUrl: './add-new.component.html',
  styleUrl: './add-new.component.scss'
})
export class AddNewComponent {

  constructor(public location:Location){}

}
