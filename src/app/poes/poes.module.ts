import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PoesRoutingModule } from './poes-routing.module';
import { ListComponent } from './component/list/list.component';
import { ManageComponent } from './component/manage/manage.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ListComponent, ManageComponent],
  imports: [CommonModule, PoesRoutingModule, SharedModule],
})
export class PoesModule {}
