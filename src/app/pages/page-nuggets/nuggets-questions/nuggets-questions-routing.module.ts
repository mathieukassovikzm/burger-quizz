import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NuggetsQuestionsComponent } from './nuggets-questions.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: NuggetsQuestionsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuggetsQuestionsRoutingModule {}
