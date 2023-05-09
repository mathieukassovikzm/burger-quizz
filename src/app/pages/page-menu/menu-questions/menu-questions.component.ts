import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import {
  IQuestionMenu,
  IQuestionsMenu,
  TeamEnum,
} from 'src/app/models/questions';
import { LstPagesMap, Pages } from 'src/app/models/routes';
import { QuestionsService } from 'src/app/services/questionsService';

@Component({
  selector: 'app-menu-questions',
  templateUrl: './menu-questions.component.html',
})
export class MenuQuestionsComponent implements OnInit, OnDestroy {
  public ketchup = TeamEnum.KETCHUP;
  public mayo = TeamEnum.MAYO;
  public menuQuestion: IQuestionsMenu;
  public questionNumber: number = 0;
  public question: IQuestionMenu | undefined;
  public showAnswer = false;
  public subscription = new Subscription();

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private questionsService: QuestionsService
  ) {
    this.menuQuestion = this.questionsService.getQuestionsMenu();
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
      this.menuQuestion.questions.length > this.questionNumber
        ? this.menuQuestion.questions.at(this.questionNumber)
        : undefined;
  }

  showReponse() {
    this.showAnswer = true;
  }

  nextQuestion() {
    this.questionNumber += 1;
    // Si il reste des questions MENU on continue les questions,
    if (this.questionNumber < this.menuQuestion.questions.length)
      this.router.navigate([
        `${LstPagesMap.get(Pages.MENU)?.route}/${
          LstPagesMap.get(Pages.QUESTIONS)?.route
        }`,
        this.questionNumber,
      ]);
    // sinon on contiue le jeu
    else
      this.router.navigate([
        `${LstPagesMap.get(Pages.DESSERT)?.route}/${
          LstPagesMap.get(Pages.RULES)?.route
        }`,
      ]);
  }
}
