import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNuggetsComponent } from './page-nuggets.component';
import { LstPagesMap, Pages } from 'src/app/models/routes';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: PageNuggetsComponent,
      },
      {
        path: LstPagesMap.get(Pages.RULES)?.route,
        loadChildren: () =>
          import('../page-rules/page-rules.module').then(
            (m) => m.PageRulesModule
          ),
      },
      {
        path: LstPagesMap.get(Pages.VIDEO)?.route,
        loadChildren: () =>
          import('../page-video/page-video.module').then(
            (m) => m.PageVideoModule
          ),
      },
      {
        path: `${LstPagesMap.get(Pages.QUESTIONS)?.route}/:id`,
        loadChildren: () =>
          import('./nuggets-questions/nuggets-questions.module').then(
            (m) => m.NuggetsQuestionsModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageNuggetsRoutingModule {}
