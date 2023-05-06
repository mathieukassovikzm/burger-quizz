import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LstPagesMap, Pages } from './models/routes';

//   {
//     path: '/question',
//     component: ScreenQuestion,
//     name: 'screen-question',
//     children: [
//       { path: '/question/:id', component: Questions, name: 'question' },
//     ],
//   },
//   { path: '*', redirect: '/' },
// ];

const routes: Routes = [
  {
    path: '',
    redirectTo: LstPagesMap.get(Pages.HOME)?.route,
    pathMatch: 'full',
  },
  {
    path: LstPagesMap.get(Pages.HOME)?.route,
    loadChildren: () =>
      import('./pages/page-home/page-home.module').then(
        (m) => m.PageHomeModule
      ),
  },
  {
    path: LstPagesMap.get(Pages.INTRO)?.route,
    loadChildren: () =>
      import('./pages/page-intro/page-intro.module').then(
        (m) => m.PageIntroModule
      ),
  },
  {
    path: LstPagesMap.get(Pages.EQUIPES)?.route,
    loadChildren: () =>
      import('./pages/page-equipes/page-equipes.module').then(
        (m) => m.PageEquipesModule
      ),
  },
  {
    path: LstPagesMap.get(Pages.NUGGETS)?.route,
    loadChildren: () =>
      import('./pages/page-nuggets/page-nuggets.module').then(
        (m) => m.PageNuggetsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
