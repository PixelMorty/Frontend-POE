import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './pages/stagiaires/detail/detail.component';
import { ListComponent } from './pages/stagiaires/list/list.component';

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
      path: '**', //route fallback
      redirectTo: 'stagiaires',
      pathMatch: 'full'      
    }

  
  ] 
}