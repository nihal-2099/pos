import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-matsers',
  standalone: false,
  
  templateUrl: './matsers.component.html',
  styleUrl: './matsers.component.scss'
})
export class MatsersComponent {
  headTitle:string =''

  constructor(private route: ActivatedRoute, private router:Router){

  



  }



}
