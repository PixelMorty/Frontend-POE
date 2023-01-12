import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StagiairesModule } from './stagiaires/stagiaires.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';

import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MomentDateModule } from '@angular/material-moment-adapter';
import { MAT_DATE_FORMATS } from '@angular/material/core';



@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StagiairesModule,
    BrowserAnimationsModule,
    SharedModule,
    MatInputModule, 
    MatDatepickerModule,
    MomentDateModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}