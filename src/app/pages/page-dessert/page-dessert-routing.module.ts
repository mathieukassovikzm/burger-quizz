import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LstPagesMap, Pages } from 'src/app/models/routes';
import { PageDessertComponent } from './page-dessert.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: PageDessertComponent,
      },
      {
        path: LstPagesMap.get(Pages.RULES)?.route,
        loadChildren: () =>
          import('../page-rules/page-rules.module').then(
            (m) => m.PageRulesModule
          ),
      },
      {
        path: `${LstPagesMap.get(Pages.QUESTIONS)?.route}/:id`,
        loadChildren: () =>
          import('./dessert-questions/dessert-questions.module').then(
            (m) => m.DessertQuestionsModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageSelPoivreRoutingModule {}
