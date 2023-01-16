import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StagiairesPoes } from './shared/enums/stagiaires-poes';
import { FormulaireAddGeneralComponent } from './shared/formulaire-add-general/formulaire-add-general.component';
import { DetailComponent } from './stagiaires/detail/detail.component';
import { ListComponent } from './stagiaires/list/list.component';

@NgModule({
  imports: [RouterModule.forRoot(AppRoutingModule.routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
  public static routes: Routes = [
    {
      path: '', // chemin vide, tjr première route
      redirectTo: 'stagiaires',
      pathMatch: 'full',
    },
    {
      path: StagiairesPoes.STAGIAIRES,
      loadChildren: () =>
        import('./stagiaires/stagiaires.module').then((m) => m.StagiairesModule),
    },
    {
      path: StagiairesPoes.POES,
      loadChildren: () =>
        import('./poes/poes.module').then((m) => m.PoesModule),
    },
    {
      path: '**', //route fallback
      redirectTo: 'stagiaires',
      pathMatch: 'full',
    },
  ];
}
