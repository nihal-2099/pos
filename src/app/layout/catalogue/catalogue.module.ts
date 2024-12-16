import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogueRoutingModule } from './catalogue-routing.module';
import { CatalogueComponent } from '../catalogue/catalogue.component';
import { MenuComponent } from './menu/menu.component';
import { SharedModule } from '../../shared/shared.module';
import { MenuListComponent } from './menu-list/menu-list.component';



@NgModule({
  declarations: [
    CatalogueComponent,
    MenuComponent,
    MenuListComponent
  ],
  imports: [
    CommonModule,
    CatalogueRoutingModule,
    SharedModule
  ]
})
export class CatalogueModule { }
