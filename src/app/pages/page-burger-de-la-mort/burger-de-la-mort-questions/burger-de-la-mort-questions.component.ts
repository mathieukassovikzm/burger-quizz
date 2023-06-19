import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as _ from 'lodash';
import { Subscription } from 'rxjs';
import {
  IQuestionBurger2laMort,
  IQuestionsBurger2laMort,
  TeamEnum,
} from 'src/app/models/questions';
import { LstPagesMap, Pages } from 'src/app/models/routes';
import { UiService } from 'src/app/services/uiService';
import { ScoresService } from 'src/app/services/scoresService';

@Component({
  selector: 'app-burger-de-la-mort-questions',
  templateUrl: './burger-de-la-mort-questions.component.html',
})
export class BurgerDeLaMortQuestionsComponent implements OnInit, OnDestroy {
  public ketchup = TeamEnum.KETCHUP;
  public mayo = TeamEnum.MAYO;
  public burger2laMortQuestion: IQuestionsBurger2laMort;
  public teamPlaying: string = '';
  public showAnswer = false;
  public subscription = new Subscription();
  public currentQuestions: IQuestionBurger2laMort[] = [];

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private uiService: UiService,
    private scoresService: ScoresService
  ) {
    this.burger2laMortQuestion = this.uiService.getQuestionsBurger2laMort();
  }

  ngOnInit() {
    const routing$ = this.activeRoute.params.subscribe((routeParams) => {
      this.teamPlaying = <string>routeParams['team'];
      this.currentQuestions = _.filter(
        this.burger2laMortQuestion.questions,
        (q) => q.team === this.teamPlaying
      );
    });
    this.subscription.add(routing$);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getClassB2lm() {
    return `b2lm ${this.teamPlaying}`;
  }

  showReponse() {
    this.showAnswer = true;
  }

  nextQuestion() {
    const looser = this.scoresService.getLooser();

    // Si on joue avec le looser il faut maintenant jouer avec le winner
    if (this.teamPlaying === looser)
      this.router.navigate([
        `${LstPagesMap.get(Pages.BURGERDELAMORT)?.route}/${
          LstPagesMap.get(Pages.VIDEO)?.route
        }2`,
      ]);
    //Sinon on a fini !
    else this.router.navigate([`${LstPagesMap.get(Pages.FIN)?.route}`]);
  }
}
