import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatsersComponent } from './matsers.component';
import { LocationsComponent } from './locations/locations.component';
import { CategoryComponent } from './category/category.component';
import { FoodTypeComponent } from './food-type/food-type.component';
import { DesignationComponent } from './designation/designation.component';
import { InventListComponent } from './invent-list/invent-list.component';



const routes: Routes = [

  {
    path: '', component: MatsersComponent, children: [

      { path: 'location', component: LocationsComponent },
      {path:'category', component:CategoryComponent},
      {path:'foodtype', component:FoodTypeComponent},
      {path:'designation', component:DesignationComponent},
      {path:'inventlist', component:InventListComponent}
    
     
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MastersRoutingModule { }
