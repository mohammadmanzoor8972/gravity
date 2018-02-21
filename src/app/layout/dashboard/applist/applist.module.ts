import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { applistRoutingModule } from './applist-routing.module';
import { applistComponent } from './applist.component';
import { SidebarModule } from '../../../shared/components/sidebar/sidebar.module';
import { SearchPipe } from '../../../search.pipe';


@NgModule({
    imports: [CommonModule, applistRoutingModule, SidebarModule],
    declarations: [applistComponent,SearchPipe]
})
export class applistModule {}
