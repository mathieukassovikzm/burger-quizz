import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdditionQuestionsComponent } from './addition-questions.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: AdditionQuestionsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdditionQuestionsRoutingModule {}
