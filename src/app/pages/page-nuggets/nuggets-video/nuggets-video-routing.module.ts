import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NuggetsVideoComponent } from './nuggets-video.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: NuggetsVideoComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuggetsVideoRoutingModule {}
