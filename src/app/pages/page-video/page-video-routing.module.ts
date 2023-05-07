import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageVideoComponent } from './page-video.component';
import { LstPagesMap, Pages } from 'src/app/models/routes';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: PageVideoComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageVideoRoutingModule {}
