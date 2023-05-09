import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageBurgerDeLaMortComponent } from './page-burger-de-la-mort.component';
import { LstPagesMap, Pages } from 'src/app/models/routes';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: PageBurgerDeLaMortComponent,
      },
      {
        path: LstPagesMap.get(Pages.RULES)?.route,
        loadChildren: () =>
          import('../page-rules/page-rules.module').then(
            (m) => m.PageRulesModule
          ),
      },
      {
        path: `${LstPagesMap.get(Pages.VIDEO)?.route}1`,
        loadChildren: () =>
          import('../page-video/page-video.module').then(
            (m) => m.PageVideoModule
          ),
      },
      {
        path: `${LstPagesMap.get(Pages.VIDEO)?.route}2`,
        loadChildren: () =>
          import('../page-video/page-video.module').then(
            (m) => m.PageVideoModule
          ),
      },
      {
        path: `${LstPagesMap.get(Pages.QUESTIONS)?.route}/:team`,
        loadChildren: () =>
          import(
            './burger-de-la-mort-questions/burger-de-la-mort-questions.module'
          ).then((m) => m.BurgerDeLaMortQuestionsModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageBurgerDeLaMortRoutingModule {}
