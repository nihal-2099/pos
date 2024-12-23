import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';


const routes: Routes = [

  {
    path: '', component: LayoutComponent, children: [

      {  path:'add',  loadChildren:() => import('./add-user/add-user.module').then(m => m.AddUserModule)},
      {  path:'dashboard',  loadChildren:() => import('./dashboard/dashboard.module').then(m => m.DashboardModule)},
      {  path:'catalogue',  loadChildren:() => import('./catalogue/catalogue.module').then(m => m.CatalogueModule)},
      {  path:'inventory',  loadChildren:() => import('./inventory/inventory.module').then(m => m.InventoryModule)},
      {  path:'master',  loadChildren:() => import('./matsers/matsers.module').then(m => m.MatsersModule)},
      {  path:'sales',  loadChildren:() => import('./sales/sales.module').then(m => m.SalesModule)}

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
export class LayoutRoutingModule { }
