import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';

import { SharedModule } from '../shared/shared.module';
import { RouterOutlet } from '@angular/router';





@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    SharedModule,
    RouterOutlet
  ]
})
export class LayoutModule { }
