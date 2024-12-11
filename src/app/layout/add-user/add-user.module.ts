import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddUserRoutingModule } from './add-user-routing.module';
import { AddUserComponent } from '../add-user/add-user.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { RouterOutlet } from '@angular/router';
import { ListComponent } from './list/list.component';



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
    RouterOutlet
  ]
})
export class AddUserModule { }
