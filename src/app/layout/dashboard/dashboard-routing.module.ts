import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
const routes: Routes = [
    {
        path: '',
        component: DashboardComponent
    },
    {
        path: 'reports',
        loadChildren: './reports/reports.module#ReportsModule'
    },
    {
        path: 'applist',
        loadChildren: './applist/applist.module#applistModule'
    },
    {
        path: 'addapp',
        loadChildren: './addapp/addapp.module#addappModule'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule {}
