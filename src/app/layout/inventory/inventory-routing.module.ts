import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventoryComponent } from './inventory.component';
import { AddRawMaterialComponent } from './add-raw-material/add-raw-material.component';


const routes: Routes = [

  {
    path: '', component: InventoryComponent, children: [

        {path:'addraw', component:AddRawMaterialComponent}
    

      // { path: 'home', component: HomeComponent },
      // {path:'aboutus', component:AboutUsComponent},
      // {path:'services', component:ServicesComponent}

      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }