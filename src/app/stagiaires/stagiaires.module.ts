import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StagiairesRoutingModule } from './stagiaires-routing.module';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { InitialsPipe } from '../shared/pipes/initials.pipe';
import { GenrePipe } from '../shared/pipes/genre.pipe';


@NgModule({
  declarations: [
    ListComponent,
    InitialsPipe,
    DetailComponent,
    GenrePipe
  ],
  
  imports: [
    CommonModule,
    StagiairesRoutingModule
  ]
})
export class StagiairesModule { }
