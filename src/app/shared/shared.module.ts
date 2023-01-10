import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UiModule } from '../ui/ui.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { FormulaireAddGeneralComponent } from './formulaire-add-general/formulaire-add-general.component';
import { IntlModule } from '../intl/intl.module';

@NgModule({
  declarations: [FormulaireAddGeneralComponent],
  imports: [CommonModule, ReactiveFormsModule, MatNativeDateModule, UiModule],
  exports: [
    HttpClientModule,
    ReactiveFormsModule,
    UiModule,
    MatNativeDateModule,
    IntlModule,
  ],
})
export class SharedModule {}
