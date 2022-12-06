import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StagiairesRoutingModule } from './stagiaires-routing.module';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { InitialsPipe } from './pipes/initials.pipe';
import { SharedModule } from '../shared/shared.module';
import { GenrePipe } from './pipes/genre.pipe';
import { AddComponent } from './add/add.component';


@NgModule({
  declarations: [
    ListComponent,
    DetailComponent,
    InitialsPipe,
    GenrePipe,
    AddComponent
  ],
  imports: [
    CommonModule,
    StagiairesRoutingModule,
    SharedModule
  ]
})
export class StagiairesModule { }
