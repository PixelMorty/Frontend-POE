import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(SurveyRoutingModule.routes)],
  exports: [RouterModule],
})
export class SurveyRoutingModule {
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
      path: 'update',
      component: UpdateComponent,
    },
  ];
}
