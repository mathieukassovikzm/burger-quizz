import { Component, OnInit } from '@angular/core';
import { LstPagesMap, Pages } from 'src/app/models/routes';
import { IVideo } from 'src/app/models/video';

@Component({
  selector: 'app-nuggets-video',
  templateUrl: './nuggets-video.component.html',
})
export class NuggetsVideoComponent implements OnInit {
  public video: IVideo = {
    redirection: `${LstPagesMap.get(Pages.NUGGETS)?.route}/${
      LstPagesMap.get(Pages.RULES)?.route
    }`,
    videoUrl: '/assets/videos/Nuggets.mp4',
  };

  constructor() {}

  ngOnInit() {}
}
