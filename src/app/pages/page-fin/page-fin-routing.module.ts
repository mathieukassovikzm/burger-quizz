import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageFinComponent } from './page-fin.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: PageFinComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageFinRoutingModule {}
