import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './component/add/add.component';
import { ListComponent } from './component/list/list.component';


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
      component: AddComponent,
    },
    {
      path: 'update/:id',
      component: AddComponent,
    },
    {
      path: '',
      redirectTo: 'list',
      pathMatch: 'full',
    },
  ];
}
