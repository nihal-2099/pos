import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddUserRoutingModule } from './add-user-routing.module';
import { AddUserComponent } from '../add-user/add-user.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { RouterOutlet } from '@angular/router';
import { ListComponent } from './list/list.component';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [
    AddUserComponent,
    AddComponent,
    EditComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    AddUserRoutingModule,
    RouterOutlet,
    SharedModule
  ]
})
export class AddUserModule { }
