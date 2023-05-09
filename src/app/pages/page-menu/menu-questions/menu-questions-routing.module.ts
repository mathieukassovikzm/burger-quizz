import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuQuestionsComponent } from './menu-questions.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: MenuQuestionsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuQuestionsRoutingModule {}
