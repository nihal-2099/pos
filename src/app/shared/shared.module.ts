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

import {MatTableModule} from '@angular/material/table';

import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ButtonsComponent } from './buttons/buttons.component';
import { AccordianComponent } from './accordian/accordian.component';
import { FieldsComponent } from './fields/fields.component';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    TableComponent,
    PageheadersComponent,
    ButtonsComponent,
    AccordianComponent,
    FieldsComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    EmailDirective,
    FormsModule,
    ReactiveFormsModule,
    FeatherModule.pick(allIcons),
    MatTableModule,
    MatPaginator,
    MatPaginatorModule,
    MatSort, MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    
    MatSelectModule,
    MatFormFieldModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule
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
    MatSelectModule,
    MatFormFieldModule,
    ButtonsComponent,
    AccordianComponent,
    FieldsComponent,
  ]
})
export class SharedModule { }
