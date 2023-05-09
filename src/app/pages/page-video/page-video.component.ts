import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LstPagesMap, Pages } from 'src/app/models/routes';
import { IVideo } from 'src/app/models/video';
import { ScoresService } from 'src/app/services/scoresService';

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

  public videoBurger2laMort1: IVideo = {
    redirection: `${LstPagesMap.get(Pages.BURGERDELAMORT)?.route}/${
      LstPagesMap.get(Pages.RULES)?.route
    }`,
    videoUrl: '/assets/videos/BurgerDeLaMort1.mp4',
  };

  public videoBurger2laMort2: IVideo = {
    redirection: `${LstPagesMap.get(Pages.BURGERDELAMORT)?.route}/${
      LstPagesMap.get(Pages.RULES)?.route
    }`,
    videoUrl: '/assets/videos/BurgerDeLaMort2.mp4',
  };

  public video = this.videoNuggets;

  constructor(private router: Router, private scoresService: ScoresService) {}

  ngOnInit() {
    // On récupère le looser qui joue le Burger de la mort en premier
    const winner = this.scoresService.getWinner();
    this.videoBurger2laMort2 = {
      ...this.videoBurger2laMort2,
      redirection: `${LstPagesMap.get(Pages.BURGERDELAMORT)?.route}/${
        LstPagesMap.get(Pages.QUESTIONS)?.route
      }/${winner}`,
    };

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
      case `${LstPagesMap.get(Pages.BURGERDELAMORT)!.route}1`:
        this.video = this.videoBurger2laMort1;
        break;
      case `${LstPagesMap.get(Pages.BURGERDELAMORT)!.route}2`:
        this.video = this.videoBurger2laMort2;
        break;
      default:
        break;
    }
  }
}
