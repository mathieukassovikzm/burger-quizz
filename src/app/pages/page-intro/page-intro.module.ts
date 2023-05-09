import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageIntroComponent } from './page-intro.component';
import { PageIntroRoutingModule } from './page-intro-routing.module';
import { VideoModule } from 'src/app/shared/components/video/video.module';

@NgModule({
  imports: [
    CommonModule,
    PageIntroRoutingModule,
    VideoModule
  ],
  exports: [PageIntroComponent],
  declarations: [PageIntroComponent]
})
export class PageIntroModule { }
