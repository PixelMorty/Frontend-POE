import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormulaireAddGeneralComponent } from '../shared/formulaire-add-general/formulaire-add-general.component';
import { ListComponent } from './component/list/list.component';
import { ManageComponent } from './component/manage/manage.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(PoesRoutingModule.routes)],
  exports: [RouterModule],
})
export class PoesRoutingModule {
  public static routes: Routes = [
    {
      path: '',
      redirectTo: 'list',
      pathMatch: 'full',
    },
    {
      path: 'list',
      component: ListComponent,
    },
    {
      path: 'add',
      component: FormulaireAddGeneralComponent,
    },
    {
      path: 'update/:id',//TODO CHECK SI CEST BIEN UN PARAM ET QUIL est pas pris comme un element du tableau url dans FormulaireAddGeneralcomponent
      component: FormulaireAddGeneralComponent,
    },
    {
      path: '',
      redirectTo: 'list',
      pathMatch: 'full',
    },
  ];
}
