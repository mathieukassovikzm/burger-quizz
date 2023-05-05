import { Component, OnInit } from '@angular/core';
import { LstPagesMap, Pages } from 'src/app/models/routes';
import { IVideo } from 'src/app/models/video';

@Component({
  selector: 'app-page-intro',
  templateUrl: './page-intro.component.html',
  styleUrls: ['./page-intro.component.scss'],
})
export class PageIntroComponent implements OnInit {
  public video: IVideo = {
    redirection: `${LstPagesMap.get(Pages.EQUIPES)?.route}`,
    videoUrl: '/assets/videos/Intro.mp4',
  };

  constructor() {}

  ngOnInit() {}
}
