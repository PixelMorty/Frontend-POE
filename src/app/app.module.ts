import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { FormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MomentDateModule } from '@angular/material-moment-adapter';
import { ModalModule } from 'ngx-bootstrap/modal';

import { DragDropModule } from '@angular/cdk/drag-drop';

import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { ListComponent } from './survey-manager/survey/list/list.component';

import { UpdateComponent } from './survey-manager/survey/update/update.component';
import { MenuComponent } from './menu/menu.component';
import { BooleanComponent } from './survey-manager/questions/boolean/boolean.component';
import { MultipleChoicesComponent } from './survey-manager/questions/multiple-choices/multiple-choices.component';
import { FreeResponseComponent } from './survey-manager/questions/free-response/free-response.component';
import { EditQuestionComponent } from './survey-manager/questions/edit-question/edit-question.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    UpdateComponent,
    MenuComponent,
    BooleanComponent,
    MultipleChoicesComponent,
    FreeResponseComponent,
    EditQuestionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    SharedModule,
    MatInputModule,
    MatDatepickerModule,
    MomentDateModule,
    MatCardModule,
    MatCheckboxModule,
    MatRadioModule,
    DragDropModule,
    ModalModule.forRoot(),
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'outline' },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
