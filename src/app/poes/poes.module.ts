import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PoesRoutingModule } from './poes-routing.module';
import { ListComponent } from './component/list/list.component';
import { ManageComponent } from './component/manage/manage.component';

@NgModule({
  declarations: [ListComponent, ManageComponent],
  imports: [CommonModule, PoesRoutingModule],
})
export class PoesModule {}
