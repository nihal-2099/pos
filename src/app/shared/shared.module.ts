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
import { PageheadersComponent } from './pageheaders/pageheaders.component';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    TableComponent,
    PageheadersComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    EmailDirective,
    FormsModule,
    ReactiveFormsModule,
    FeatherModule.pick(allIcons),
    MatSelectModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    TableComponent,
    EmailDirective,
    FormsModule,
    ReactiveFormsModule,
    FeatherModule,
    PageheadersComponent,
    MatSelectModule
  ]
})
export class SharedModule { }
