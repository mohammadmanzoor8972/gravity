import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { applistComponent } from './applist.component';

const routes: Routes = [
    {
        path: '',
        component: applistComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class applistRoutingModule {}
