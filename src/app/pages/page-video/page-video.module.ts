import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { VideoModule } from 'src/app/shared/components/video/video.module';
import { PageVideoRoutingModule } from './page-video-routing.module';
import { PageVideoComponent } from './page-video.component';

@NgModule({
  imports: [CommonModule, PageVideoRoutingModule, VideoModule],
  exports: [PageVideoComponent],
  declarations: [PageVideoComponent],
})
export class PageVideoModule {}
