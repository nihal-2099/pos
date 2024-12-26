import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-table-select',
  standalone: false,
  
  templateUrl: './table-select.component.html',
  styleUrl: './table-select.component.scss'
})
export class TableSelectComponent {

  tableSelect:Array<any> =[
    {tableno:'1', area:'Inner', status:'Serving'},
    {tableno:'2', area:'Inner', status:'Reserved'},
    {tableno:'3', area:'Inner', status:'Vacant'},
    {tableno:'4', area:'Inner', status:'Vacant'},
    {tableno:'5', area:'Garden Area', status:'Serving'},
    {tableno:'6', area:'Garden Area', status:'Vacant'},
    {tableno:'7', area:'Garden Area', status:'Vacant'},
    {tableno:'8', area:'Garden Area', status:'Vacant'},

  ]

  @Output() tableSelectDetails:any = new EventEmitter()


    
  getDetails(event:any){
    this.tableSelectDetails.emit(event)
  }

}
