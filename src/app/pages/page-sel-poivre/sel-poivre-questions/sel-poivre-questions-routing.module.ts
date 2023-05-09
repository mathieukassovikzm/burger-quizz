import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelPoivreQuestionsComponent } from './sel-poivre-questions.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: SelPoivreQuestionsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelPoivreQuestionsRoutingModule {}
