import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';

import { MatInputModule } from '@angular/material/input';
import { MomentDateModule } from '@angular/material-moment-adapter';
import { ModalModule } from 'ngx-bootstrap/modal';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { ListComponent } from './survey-manager/survey/list/list.component';

import { UpdateComponent } from './survey-manager/survey/update/update.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [AppComponent, ListComponent, UpdateComponent, MenuComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    MatInputModule,
    MatDatepickerModule,
    MomentDateModule,
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
