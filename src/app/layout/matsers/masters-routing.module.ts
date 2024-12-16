import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatsersComponent } from './matsers.component';
import { LocationsComponent } from './locations/locations.component';



const routes: Routes = [

  {
    path: '', component: MatsersComponent, children: [

      { path: 'location', component: LocationsComponent },
    
     
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MastersRoutingModule { }
