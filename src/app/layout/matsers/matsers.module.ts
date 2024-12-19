import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MastersRoutingModule } from './masters-routing.module';
import { LocationsComponent } from './locations/locations.component';
import { SharedModule } from '../../shared/shared.module';
import { MatsersComponent } from './matsers.component';
import { CategoryComponent } from './category/category.component';
import { FoodTypeComponent } from './food-type/food-type.component';
import { DesignationComponent } from './designation/designation.component';
import { InventListComponent } from './invent-list/invent-list.component';
import { CompanyComponent } from './company/company.component';



@NgModule({
  declarations: [
    LocationsComponent,
    MatsersComponent,
    CategoryComponent,
    FoodTypeComponent,
    DesignationComponent,
    InventListComponent,
    CompanyComponent,
  ],
  imports: [
    CommonModule,
    MastersRoutingModule,
    SharedModule
  ]
})
export class MatsersModule { }
