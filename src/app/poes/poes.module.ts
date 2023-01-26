import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PoesRoutingModule } from './poes-routing.module';
import { ListComponent } from './component/list/list.component';
import { SharedModule } from '../shared/shared.module';
import { DetailComponent } from './component/detail/detail.component';
import { PoeAddRemoveStagiaireComponent } from './component/poe-add-remove-stagiaire/poe-add-remove-stagiaire.component';
import { TypePipe } from './component/pipes/type.pipe';
import { InitialsPipe } from './component/pipes/initials.pipe';
import { StagiairesRoutingModule } from '../stagiaires/stagiaires-routing.module';

@NgModule({
  declarations: [
    ListComponent,
    DetailComponent,
    PoeAddRemoveStagiaireComponent,
    InitialsPipe,
    TypePipe,
    
  ], // TODO VIRER ADDComponent
  imports: [CommonModule, PoesRoutingModule, StagiairesRoutingModule, SharedModule],
})
export class PoesModule {}
