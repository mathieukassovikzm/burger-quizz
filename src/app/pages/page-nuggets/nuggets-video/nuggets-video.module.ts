import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { VideoModule } from 'src/app/shared/components/video/video.module';
import { NuggetsVideoRoutingModule } from './nuggets-video-routing.module';
import { NuggetsVideoComponent } from './nuggets-video.component';

@NgModule({
  imports: [CommonModule, NuggetsVideoRoutingModule, VideoModule],
  exports: [NuggetsVideoComponent],
  declarations: [NuggetsVideoComponent],
})
export class NuggetsVideoModule {}
