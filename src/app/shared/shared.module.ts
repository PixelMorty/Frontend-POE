import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UiModule } from '../ui/ui.module';
import { ReactiveFormsModule } from '@angular/forms';
import { DateAdapter, MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { FormulaireAddGeneralComponent } from './formulaire-add-general/formulaire-add-general.component';
import { IntlModule } from '../intl/intl.module';

import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MomentDateAdapter, MomentDateModule } from '@angular/material-moment-adapter';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import { MY_DATE_FORMATS } from './formulaire-add-general/my-date-formats';


@NgModule({
  declarations: [FormulaireAddGeneralComponent],
  imports: [
    CommonModule, 
    ReactiveFormsModule, 
    MatNativeDateModule, 
    UiModule, 
    MatInputModule, 
    MatDatepickerModule,
    MomentDateModule
  ],
  exports: [
    HttpClientModule,
    ReactiveFormsModule,
    UiModule,
    MatNativeDateModule,
    IntlModule,
    
  ],
  providers: [{ provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
  { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS }],
})
export class SharedModule {}
