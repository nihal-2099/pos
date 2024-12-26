import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesRoutingModule } from './sales-routing.module';
import { SalesComponent } from './sales.component';
import { SaleComponent } from './sale/sale.component';
import { ReceiptsComponent } from './receipts/receipts.component';
import { SharedModule } from '../../shared/shared.module';
import { SaleCardsComponent } from './sale/sale-cards/sale-cards.component';
import { TableSelectComponent } from './sale/table-select/table-select.component';


@NgModule({
  declarations: [
    SalesComponent,
    SaleComponent,
    ReceiptsComponent,
    SaleCardsComponent,
    TableSelectComponent
  ],
  imports: [
    CommonModule,
    SalesRoutingModule,
    SharedModule
  ]
})
export class SalesModule { }
