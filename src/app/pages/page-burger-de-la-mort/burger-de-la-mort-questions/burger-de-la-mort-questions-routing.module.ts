import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BurgerDeLaMortQuestionsComponent } from './burger-de-la-mort-questions.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: BurgerDeLaMortQuestionsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BurgerDeLaMortQuestionsRoutingModule {}
