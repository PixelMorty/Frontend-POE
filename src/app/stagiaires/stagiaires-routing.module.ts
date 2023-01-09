import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StagiairesPoes } from '../shared/enums/stagiaires-poes';
import { FormulaireAddGeneralComponent } from '../shared/formulaire-add-general/formulaire-add-general.component';
import { DetailComponent } from './detail/detail.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(StagiairesRoutingModule.routes)],
  exports: [RouterModule]
})
export class StagiairesRoutingModule { 

  public static routes: Routes = [
    {
      path: '', // chemin vide, tjr première route
      redirectTo: 'list',
      pathMatch: 'full',
    },
    { path: 'list',
     component: ListComponent },// StagiairesPoes.STAGIAIRES
    {
      path: 'detail/:id',
      component: DetailComponent,
    },
    {
      path: 'add',
      component: FormulaireAddGeneralComponent,
    },
    {
      path: '', //route fallback
      redirectTo: 'list',
      pathMatch: 'full',
    },
  ];
}
