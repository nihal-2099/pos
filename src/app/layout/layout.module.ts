import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { RouterOutlet } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ServicesComponent } from './services/services.component';


@NgModule({
  declarations: [LayoutComponent, HomeComponent, AboutUsComponent, ServicesComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    SharedModule,
    RouterOutlet
  ]
})
export class LayoutModule { }
