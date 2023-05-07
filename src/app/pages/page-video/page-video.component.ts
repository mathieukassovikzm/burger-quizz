import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LstPagesMap, Pages } from 'src/app/models/routes';
import { IVideo } from 'src/app/models/video';

@Component({
  selector: 'app-page-video',
  templateUrl: './page-video.component.html',
})
export class PageVideoComponent implements OnInit {
  public videoNuggets: IVideo = {
    redirection: `${LstPagesMap.get(Pages.NUGGETS)?.route}/${
      LstPagesMap.get(Pages.RULES)?.route
    }`,
    videoUrl: '/assets/videos/Nuggets.mp4',
  };

  public videoSelPoivre: IVideo = {
    redirection: `${LstPagesMap.get(Pages.SELPOIVRE)?.route}/${
      LstPagesMap.get(Pages.RULES)?.route
    }`,
    videoUrl: '/assets/videos/SelPoivre.mp4',
  };

  public videoMenu: IVideo = {
    redirection: `${LstPagesMap.get(Pages.MENU)?.route}/${
      LstPagesMap.get(Pages.RULES)?.route
    }`,
    videoUrl: '/assets/videos/Menus.mp4',
  };

  public videoAddition: IVideo = {
    redirection: `${LstPagesMap.get(Pages.ADDITION)?.route}/${
      LstPagesMap.get(Pages.RULES)?.route
    }`,
    videoUrl: '/assets/videos/Addition.mp4',
  };

  public video = this.videoNuggets;

  constructor(private router: Router) {}

  ngOnInit() {
    const currentRoute = this.router.url.slice(1).replace(`/video`, '');
    switch (currentRoute) {
      case LstPagesMap.get(Pages.ADDITION)!.route:
        this.video = this.videoAddition;
        break;
      case LstPagesMap.get(Pages.MENU)!.route:
        this.video = this.videoMenu;
        break;
      case LstPagesMap.get(Pages.NUGGETS)!.route:
        this.video = this.videoNuggets;
        break;
      case LstPagesMap.get(Pages.SELPOIVRE)!.route:
        this.video = this.videoSelPoivre;
        break;
      default:
        break;
    }
  }
}
