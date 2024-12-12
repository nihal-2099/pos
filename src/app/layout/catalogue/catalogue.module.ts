import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogueRoutingModule } from './catalogue-routing.module';
import { CatalogueComponent } from '../catalogue/catalogue.component';
import { MenuComponent } from './menu/menu.component';



@NgModule({
  declarations: [
    CatalogueComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    CatalogueRoutingModule
  ]
})
export class CatalogueModule { }
