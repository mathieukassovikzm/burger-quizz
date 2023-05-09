import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DessertQuestionsComponent } from './dessert-questions.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: DessertQuestionsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DessertQuestionsRoutingModule {}
