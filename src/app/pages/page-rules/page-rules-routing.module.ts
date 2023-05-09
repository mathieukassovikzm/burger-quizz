import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageRulesComponent } from './page-rules.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: PageRulesComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageRulesRoutingModule {}
