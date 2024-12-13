import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogueRoutingModule } from './catalogue-routing.module';
import { CatalogueComponent } from '../catalogue/catalogue.component';
import { MenuComponent } from './menu/menu.component';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [
    CatalogueComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    CatalogueRoutingModule,
    SharedModule
  ]
})
export class CatalogueModule { }
