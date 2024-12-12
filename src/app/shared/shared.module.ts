import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TableComponent } from './table/table.component';
import { EmailDirective } from '../directives/email.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FeatherModule } from 'angular-feather';
import {  allIcons} from 'angular-feather/icons';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    TableComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    EmailDirective,
    FormsModule,
    ReactiveFormsModule,
    FeatherModule.pick(allIcons)
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    TableComponent,
    EmailDirective,
    FormsModule,
    ReactiveFormsModule,
    FeatherModule
  ]
})
export class SharedModule { }
