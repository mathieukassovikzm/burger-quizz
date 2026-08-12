import { Component, OnInit } from '@angular/core';
import { LstPagesMap, Pages } from 'src/app/models/routes';
import { IVideo } from 'src/app/models/video';
import { UiService } from 'src/app/services/uiService';

@Component({
    selector: 'app-page-intro',
    templateUrl: './page-intro.component.html',
    styleUrls: ['./page-intro.component.scss'],
    standalone: false
})
export class PageIntroComponent implements OnInit {
  public video: IVideo;

  constructor(private uiService: UiService) {
    this.video = {
      redirection: `${LstPagesMap.get(Pages.EQUIPES)?.route}`,
      videoUrl: this.uiService.introVideoUrl,
    };
  }

  ngOnInit() {}
}
