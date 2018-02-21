import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { addappComponent } from './addapp.component';

const routes: Routes = [
    {
        path: '',
        component: addappComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class addappRoutingModule {}
