import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TeamEnum } from 'src/app/models/questions';
import { ScoresService } from 'src/app/services/scoresService';

@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.scss'],
})
export class ScoresComponent implements OnInit, OnDestroy {
  @Input() team?: TeamEnum;
  public scoreKetchup$ = this.scoresService.scoreKetchup$;
  public scoreMayo$ = this.scoresService.scoreMayo$;
  public score = 0;
  private subscription$ = new Subscription();

  constructor(private scoresService: ScoresService) {}

  ngOnInit() {
    switch (this.team) {
      case TeamEnum.KETCHUP:
        const scoreK = this.scoreKetchup$.subscribe((newScore) => {
          this.score = newScore;
        });
        this.subscription$.add(scoreK);
        break;
      case TeamEnum.MAYO:
        const scoreM = this.scoreMayo$.subscribe((newScore) => {
          this.score = newScore;
        });
        this.subscription$.add(scoreM);
        break;
    }
  }

  ngOnDestroy() {
    this.subscription$.unsubscribe();
  }

  getBkgImage(): string {
    return `/assets/scores-${this.team}/score${this.score}.png`;
  }

  getClassScore(): string {
    return `score ${this.team}`;
  }

  getClassBtnMinus(): string {
    return `btn btn-moins ${this.team}`;
  }

  getClassBtnPlus(): string {
    return `btn btn-moins ${this.team}`;
  }

  teamMinusOne() {
    switch (this.team) {
      case TeamEnum.KETCHUP:
        this.scoresService.changeScoreKetchup(-1);
        break;
      case TeamEnum.MAYO:
        this.scoresService.changeScoreMayo(-1);
        break;
    }
  }

  teamPlusOne() {
    switch (this.team) {
      case TeamEnum.KETCHUP:
        this.scoresService.changeScoreKetchup(+1);
        break;
      case TeamEnum.MAYO:
        this.scoresService.changeScoreMayo(+1);
        break;
    }
  }
}
