import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UiModule } from '../ui/ui.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { FormulaireAddGeneralComponent } from './formulaire-add-general/formulaire-add-general.component';
import { IntlModule } from '../intl/intl.module';

import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MomentDateModule } from '@angular/material-moment-adapter';
import { MAT_DATE_FORMATS } from '@angular/material/core';


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
})
export class SharedModule {}
