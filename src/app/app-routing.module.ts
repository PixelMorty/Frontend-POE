import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './stagiaires/add/add.component';
import { DetailComponent } from './stagiaires/detail/detail.component';
import { ListComponent } from './stagiaires/list/list.component';

@NgModule({
  imports: [RouterModule.forRoot(AppRoutingModule.routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  public static routes: Routes = [
    {
      path: '',// chemin vide, tjr première route 
      redirectTo: 'stagiaires',
      pathMatch: 'full'
    },
    {path: 'stagiaires',
      component: ListComponent
    },
    {
      path: 'detail/:id',
      component: DetailComponent
    },
    {
      path: 'stagiaires/add',
      component: AddComponent
    },
    //lazy module
    {
      path: 'poes',
      loadChildren: ()=>import('./poes/poes.module')
      .then((m)=>m.PoesModule)
    },
    {
      path: '**', //route fallback
      redirectTo: 'stagiaires',
      pathMatch: 'full'      
    }

  
  ] 
}