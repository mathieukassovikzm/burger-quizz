import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LstPagesMap, Pages } from './models/routes';

// const routes = [
//   {
//     path: '/nuggets-equipes',
//     component: PageChoixDesEquipes,
//     name: 'pageChoixEquipes',
//   },
//   {
//     path: '/nuggets-rules',
//     component: PageNuggetsRules,
//     name: 'pageNuggetsRules',
//   },
//   {
//     path: '/nuggets-video',
//     component: PageNuggetsVideo,
//     name: 'pageNuggetsVideo',
//   },
//   {
//     path: '/sel-poivre-rules',
//     component: PageSelPoivreRules,
//     name: 'pageSelPoivreRules',
//   },
//   {
//     path: '/sel-poivre-video',
//     component: PageSelPoivreVideo,
//     name: 'pageSelPoivreVideo',
//   },
//   { path: '/menu-rules', component: PageMenusRules, name: 'pageMenusRules' },
//   { path: '/menu-video', component: PageMenusVideo, name: 'pageMenusVideo' },
//   {
//     path: '/dessert-rules',
//     component: PageDessertRules,
//     name: 'pageDessertRules',
//   },
//   {
//     path: '/addition-rules',
//     component: PageAdditionRules,
//     name: 'pageAdditionRules',
//   },
//   {
//     path: '/addition-video',
//     component: PageAdditionVideo,
//     name: 'pageAdditionVideo',
//   },
//   {
//     path: '/burger-de-la-mort-rules',
//     component: PageBurgerDeLaMortRules,
//     name: 'pageBurger2laMortRules',
//   },
//   {
//     path: '/burger-de-la-mort-video',
//     component: PageBurgerDeLaMortVideo,
//     name: 'pageBurger2laMortVideo',
//   },
//   {
//     path: '/burger-de-la-mort-mayo',
//     component: PageBurgerDeLaMortMayo,
//     name: 'pageBurger2laMortMayo',
//   },
//   {
//     path: '/burger-de-la-mort-ketchup',
//     component: PageBurgerDeLaMortKetchup,
//     name: 'pageBurger2laMortKetchup',
//   },
//   {
//     path: '/fin',
//     component: PageFin,
//     name: 'pageFin',
//   },
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
