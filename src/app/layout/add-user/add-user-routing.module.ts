import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';


const routes: Routes = [

  {
    path: '', component: AddUserComponent, children: [

      { path: 'new', component: AddComponent },
      { path: 'edit', component: EditComponent },
      {
        path:'list', component:ListComponent
      }
      // {path:'aboutus', component:AboutUsComponent},
      // {path:'services', component:ServicesComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddUserRoutingModule { }
