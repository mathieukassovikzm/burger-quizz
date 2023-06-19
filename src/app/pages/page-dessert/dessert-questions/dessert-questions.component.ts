import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import {
  IQuestionDessert,
  IQuestionsDessert,
  TeamEnum,
} from 'src/app/models/questions';
import { LstPagesMap, Pages } from 'src/app/models/routes';
import { UiService } from 'src/app/services/uiService';

@Component({
  selector: 'app-dessert-questions',
  templateUrl: './dessert-questions.component.html',
})
export class DessertQuestionsComponent implements OnInit, OnDestroy {
  public ketchup = TeamEnum.KETCHUP;
  public mayo = TeamEnum.MAYO;
  public dessertQuestion: IQuestionsDessert;
  public questionNumber: number = 0;
  public question: IQuestionDessert | undefined;
  public showAnswer = false;
  public subscription = new Subscription();

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private uiService: UiService
  ) {
    this.dessertQuestion = this.uiService.getQuestionsDessert();
  }

  ngOnInit() {
    const routing$ = this.activeRoute.params.subscribe((routeParams) => {
      this.showAnswer = false;
      this.loadQuestion(Number(routeParams['id']));
    });
    this.subscription.add(routing$);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  loadQuestion(id: number) {
    this.questionNumber = id;
    this.question =
      this.dessertQuestion.questions.length > this.questionNumber
        ? this.dessertQuestion.questions.at(this.questionNumber)
        : undefined;
  }

  showReponse() {
    this.showAnswer = true;
  }

  nextQuestion() {
    this.questionNumber += 1;
    // Si il reste des questions nuggets on continue les questions,
    if (this.questionNumber < this.dessertQuestion.questions.length)
      this.router.navigate([
        `${LstPagesMap.get(Pages.DESSERT)?.route}/${
          LstPagesMap.get(Pages.QUESTIONS)?.route
        }`,
        this.questionNumber,
      ]);
    // sinon on contiue le jeu
    else
      this.router.navigate([
        `${LstPagesMap.get(Pages.ADDITION)?.route}/${
          LstPagesMap.get(Pages.VIDEO)?.route
        }`,
      ]);
  }
}
