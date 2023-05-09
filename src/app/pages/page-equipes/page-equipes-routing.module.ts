import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageEquipesComponent } from './page-equipes.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: PageEquipesComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageEquipesRoutingModule {}
