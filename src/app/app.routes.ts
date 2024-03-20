import { Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ItemsComponent } from './pages/dashboard/items/items.component';
import { LayoutComponent } from './pages/layout/layout.component';

export const routes: Routes = [
    {
        path: '', redirectTo: 'home', pathMatch: 'full'
    },
    {
        path: 'home', component: HomeComponent
    },
    {
        path: 'login', component: LoginComponent
    },

    {
        path: '', 
        component: LayoutComponent,
        children: [
            {
                path: 'dashboard', component: DashboardComponent
            },
            {
                path: 'items', component: ItemsComponent
            },
        ]
    },


    // Page de 404 error
    {
        path: '**', component: NotFoundComponent
    }
];
