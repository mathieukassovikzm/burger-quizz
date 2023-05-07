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
  {
    path: LstPagesMap.get(Pages.SELPOIVRE)?.route,
    loadChildren: () =>
      import('./pages/page-sel-poivre/page-sel-poivre.module').then(
        (m) => m.PageSelPoivreModule
      ),
  },
  {
    path: LstPagesMap.get(Pages.MENU)?.route,
    loadChildren: () =>
      import('./pages/page-menu/page-menu.module').then(
        (m) => m.PageMenuModule
      ),
  },
  {
    path: LstPagesMap.get(Pages.DESSERT)?.route,
    loadChildren: () =>
      import('./pages/page-dessert/page-dessert.module').then(
        (m) => m.PageDessertModule
      ),
  },
  {
    path: LstPagesMap.get(Pages.ADDITION)?.route,
    loadChildren: () =>
      import('./pages/page-addition/page-addition.module').then(
        (m) => m.PageAdditionModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
