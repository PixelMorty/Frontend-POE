import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './component/list/list.component';

import { FormulaireAddGeneralComponent } from '../shared/formulaire-add-general/formulaire-add-general.component';

import { DetailComponent } from './component/detail/detail.component';
import { PoeAddRemoveStagiaireComponent } from './component/poe-add-remove-stagiaire/poe-add-remove-stagiaire.component';
import { PoePanoramaComponent } from './component/poepanorama/poepanorama.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(PoesRoutingModule.routes)],
  exports: [RouterModule],
})
export class PoesRoutingModule {
  public static routes: Routes = [
    {
      path: '',
      redirectTo: 'poepanorama',
      pathMatch: 'full',
    },
    {
      path: 'poepanorama',
      component: PoePanoramaComponent,
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
      path: 'add/:id',//TODO CHECK SI CEST BIEN UN PARAM ET QUIL est pas pris comme un element du tableau url dans FormulaireAddGeneralcomponent
      component: FormulaireAddGeneralComponent,

    },
    {
      path: 'detail/:id',//TODO CHECK SI CEST BIEN UN PARAM ET QUIL est pas pris comme un element du tableau url dans FormulaireAddGeneralcomponent
      component: DetailComponent,

    },
    {
      path: 'poe-add-remove/:id',//TODO CHECK SI CEST BIEN UN PARAM ET QUIL est pas pris comme un element du tableau url dans FormulaireAddGeneralcomponent
      component: PoeAddRemoveStagiaireComponent,

    },
    {
      path: '**',
      redirectTo: 'poepanorama',
      pathMatch: 'full',
    },
  ];
}
