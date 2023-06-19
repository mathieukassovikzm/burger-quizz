import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import {
  IQuestionNuggets,
  IQuestionsNuggets,
  TeamEnum,
} from 'src/app/models/questions';
import { LstPagesMap, Pages } from 'src/app/models/routes';
import { UiService } from 'src/app/services/uiService';

@Component({
  selector: 'app-nuggets-questions',
  templateUrl: './nuggets-questions.component.html',
})
export class NuggetsQuestionsComponent implements OnInit, OnDestroy {
  public ketchup = TeamEnum.KETCHUP;
  public mayo = TeamEnum.MAYO;
  public nuggetsQuestion: IQuestionsNuggets;
  public questionNumber: number = 0;
  public question: IQuestionNuggets | undefined;
  public showAnswer = false;
  public subscription = new Subscription();

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private uiService: UiService
  ) {
    this.nuggetsQuestion = this.uiService.getQuestionsNuggets();
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
      this.nuggetsQuestion.questions.length > this.questionNumber
        ? this.nuggetsQuestion.questions.at(this.questionNumber)
        : undefined;
  }

  isGoodRep(i: number): boolean {
    return i === this.question?.reponseProp?.goodrep && this.showAnswer;
  }

  showReponse() {
    this.showAnswer = true;
  }

  nextQuestion() {
    this.questionNumber += 1;
    // Si il reste des questions nuggets on continue les questions,
    if (this.questionNumber < this.nuggetsQuestion.questions.length)
      this.router.navigate([
        `${LstPagesMap.get(Pages.NUGGETS)?.route}/${
          LstPagesMap.get(Pages.QUESTIONS)?.route
        }`,
        this.questionNumber,
      ]);
    // sinon on contiue le jeu
    else
      this.router.navigate([
        `${LstPagesMap.get(Pages.SELPOIVRE)?.route}/${
          LstPagesMap.get(Pages.VIDEO)?.route
        }`,
      ]);
  }
}
