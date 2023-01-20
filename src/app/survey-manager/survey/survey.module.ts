import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SurveyRoutingModule } from './survey-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, SurveyRoutingModule, SharedModule],
})
export class SurveyModule {}
