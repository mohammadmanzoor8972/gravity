import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SidebarModule } from '../../shared/components/sidebar/sidebar.module';
import { FormsModule }   from '@angular/forms';

@NgModule({
    imports: [CommonModule, DashboardRoutingModule, SidebarModule,FormsModule],
    declarations: [DashboardComponent]
})
export class DashboardModule {}
