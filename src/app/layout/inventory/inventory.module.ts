import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryComponent } from './inventory.component';
import { AddRawMaterialComponent } from './planned-inventory/add-raw-material/add-raw-material.component';
import { InventoryRoutingModule } from './inventory-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { PlannedInventoryComponent } from './planned-inventory/planned-inventory.component';
import { InventoryListComponent } from './inventory-list/inventory-list.component';
import { AddNewComponent } from './inventory-list/add-new/add-new.component';



@NgModule({
  declarations: [
    InventoryComponent,
    AddRawMaterialComponent,
    PlannedInventoryComponent,
    InventoryListComponent,
    AddNewComponent
  ],
  imports: [
    CommonModule,
    InventoryRoutingModule,
    SharedModule
  ]
})
export class InventoryModule { }
