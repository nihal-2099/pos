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
import {MatFormFieldModule} from '@angular/material/form-field';

import {MatTableModule} from '@angular/material/table';

import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

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
<<<<<<< HEAD
    MatTableModule,
    MatPaginator,
    MatPaginatorModule,
    MatSort, MatSortModule,
    MatFormFieldModule,
    MatInputModule
    
=======
    MatSelectModule,
    MatFormFieldModule
>>>>>>> fbe83757d2c6961259b6df083f1d63b53ca611bd
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
    MatFormFieldModule
  ]
})
export class SharedModule { }
