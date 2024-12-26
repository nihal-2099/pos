import { Routes } from '@angular/router';
export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' }, // Redirect root URL to /home

    {
        path:'layout', loadChildren:() => import('./layout/layout.module').then(m => m.LayoutModule)
    },
    {
        path:'login',  loadChildren:() => import('./login/login.module').then(m => m.LoginModule)
    },

];
