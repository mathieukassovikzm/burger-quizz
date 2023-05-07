import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LstPagesMap, Pages } from 'src/app/models/routes';
import { PageSelPoivreComponent } from './page-sel-poivre.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: PageSelPoivreComponent,
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
          import('./sel-poivre-questions/sel-poivre-questions.module').then(
            (m) => m.SelPoivreQuestionsModule
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
