import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { addappRoutingModule } from './addapp-routing.module';
import { addappComponent } from './addapp.component';
import { SidebarModule } from '../../../shared/components/sidebar/sidebar.module';
import { FormsModule } from '@angular/forms';


@NgModule({
    imports: [CommonModule, addappRoutingModule, SidebarModule,FormsModule],
    declarations: [addappComponent]
})
export class addappModule {}
