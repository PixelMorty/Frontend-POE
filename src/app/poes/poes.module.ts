import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PoesRoutingModule } from './poes-routing.module';
import { ListComponent } from './component/list/list.component';
import { SharedModule } from '../shared/shared.module';
import { AddComponent } from './component/add/add.component';

@NgModule({
  declarations: [ListComponent, AddComponent],
  imports: [CommonModule, PoesRoutingModule, SharedModule],
})
export class PoesModule {}
