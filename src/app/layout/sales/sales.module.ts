import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesRoutingModule } from './sales-routing.module';
import { SalesComponent } from './sales.component';
import { SaleComponent } from './sale/sale.component';
import { ReceiptsComponent } from './receipts/receipts.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    SalesComponent,
    SaleComponent,
    ReceiptsComponent
  ],
  imports: [
    CommonModule,
    SalesRoutingModule,
    SharedModule
  ]
})
export class SalesModule { }
