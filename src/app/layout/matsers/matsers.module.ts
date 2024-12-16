import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MastersRoutingModule } from './masters-routing.module';
import { LocationsComponent } from './locations/locations.component';
import { SharedModule } from '../../shared/shared.module';
import { MatsersComponent } from './matsers.component';



@NgModule({
  declarations: [
    LocationsComponent,
    MatsersComponent
  ],
  imports: [
    CommonModule,
    MastersRoutingModule,
    SharedModule
  ]
})
export class MatsersModule { }
