import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalesComponent } from './sales.component';
import { SaleComponent } from './sale/sale.component';
import { ReceiptsComponent } from './receipts/receipts.component';

const routes: Routes = [

  {
    path: '', component: SalesComponent, children: [

      { path: 'sale', component: SaleComponent },
      {path:'receipts', component:ReceiptsComponent}
    
     
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesRoutingModule { }
