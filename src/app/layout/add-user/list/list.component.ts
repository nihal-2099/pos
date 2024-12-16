import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  standalone: false,
  
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})



export class ListComponent {
  dataSourceOption = [
    { name: "User", value:  [
      {
        "2020/01/01": null,
        "2020/01/02": null,
        "2020/01/03": null,
        "2020/01/04": 10,
        name: "Collin"
      },
      {
        "2020/01/01": null,
        "2020/01/02": null,
        "2020/01/03": null,
        "2020/01/04": 100,
        name: "Peter"
      }
    ] }
  ];

}
