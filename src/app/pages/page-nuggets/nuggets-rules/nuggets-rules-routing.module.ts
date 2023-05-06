import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NuggetsRulesComponent } from './nuggets-rules.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: NuggetsRulesComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuggetsRulesRoutingModule {}
