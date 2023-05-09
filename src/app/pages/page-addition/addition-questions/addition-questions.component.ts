import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import {
  IQuestionAddition,
  IQuestionNuggets,
  IQuestionsAddition,
  IQuestionsNuggets,
  TeamEnum,
} from 'src/app/models/questions';
import { LstPagesMap, Pages } from 'src/app/models/routes';
import { additionTheme } from 'src/app/services/data/QuizAnnifLolaMumu/Addition';
import { QuestionsService } from 'src/app/services/questionsService';

@Component({
  selector: 'app-addition-questions',
  templateUrl: './addition-questions.component.html',
})
export class AdditionQuestionsComponent implements OnInit, OnDestroy {
  public ketchup = TeamEnum.KETCHUP;
  public mayo = TeamEnum.MAYO;
  public addtionQuestion: IQuestionsAddition;
  public questionNumber: number = 0;
  public question: IQuestionAddition | undefined;
  public showAnswer = false;
  public subscription = new Subscription();
  public additionTheme = additionTheme;

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private questionsService: QuestionsService
  ) {
    this.addtionQuestion = this.questionsService.getQuestionsAddition();
  }

  ngOnInit() {
    const routing$ = this.activeRoute.params.subscribe((routeParams) => {
      this.loadQuestion(<number>routeParams['id']);
    });
    this.subscription.add(routing$);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  loadQuestion(id: number) {
    this.questionNumber = id;
    this.question =
      this.addtionQuestion.questions.length > this.questionNumber
        ? this.addtionQuestion.questions.at(this.questionNumber)
        : undefined;
  }

  showReponse() {
    this.showAnswer = true;
  }

  nextQuestion() {
    this.questionNumber += 1;
    // Si il reste des questions nuggets on continue les questions,
    if (this.questionNumber < this.addtionQuestion.questions.length)
      this.router.navigate([
        `${LstPagesMap.get(Pages.ADDITION)?.route}/${
          LstPagesMap.get(Pages.QUESTIONS)?.route
        }`,
        this.questionNumber,
      ]);
    // sinon on contiue le jeu
    else
      this.router.navigate([
        `${LstPagesMap.get(Pages.BURGERDELAMORT)?.route}/${
          LstPagesMap.get(Pages.VIDEO)?.route
        }1`,
      ]);
  }
}
