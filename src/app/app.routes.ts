import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path:'layout', loadChildren:() => import('./layout/layout.module').then(m => m.LayoutModule)
    }
];
