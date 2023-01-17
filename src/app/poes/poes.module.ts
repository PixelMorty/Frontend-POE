import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PoesRoutingModule } from './poes-routing.module';
import { ListComponent } from './component/list/list.component';
import { SharedModule } from '../shared/shared.module';
import { DetailComponent } from './component/detail/detail.component';

@NgModule({
  declarations: [ListComponent, DetailComponent],// TODO VIRER ADDComponent
  imports: [CommonModule, PoesRoutingModule, SharedModule],
})
export class PoesModule {}
