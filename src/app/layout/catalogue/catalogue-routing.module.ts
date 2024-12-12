import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogueComponent } from './catalogue.component';
import { MenuComponent } from './menu/menu.component';



const routes: Routes = [

  {
    path: '', component: CatalogueComponent, children: [

      { path: 'offline', component: MenuComponent },
      { path: 'online', component: MenuComponent },
    
      // {path:'aboutus', component:AboutUsComponent},
      // {path:'services', component:ServicesComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogueRoutingModule { }
