import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventoryComponent } from './inventory.component';
import { AddRawMaterialComponent } from './planned-inventory/add-raw-material/add-raw-material.component';
import { PlannedInventoryComponent } from './planned-inventory/planned-inventory.component';
import { InventoryListComponent } from './inventory-list/inventory-list.component';
import { AddNewComponent } from './inventory-list/add-new/add-new.component';


const routes: Routes = [

  {
    path: '', component: InventoryComponent, children: [

        {path:'addraw', component:AddRawMaterialComponent},
        {path:'plan', component:PlannedInventoryComponent},
        {path:'invtlist', component:InventoryListComponent},
        {path:'invtlist/add-new', component:AddNewComponent}
    

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