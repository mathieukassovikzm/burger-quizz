import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  IQuestion,
  IQuestionsNuggets,
  TeamEnum,
} from 'src/app/models/questions';
import { LstPagesMap, Pages } from 'src/app/models/routes';
import { QuestionsService } from 'src/app/services/questionsService';

@Component({
  selector: 'app-nuggets-questions',
  templateUrl: './nuggets-questions.component.html',
})
export class NuggetsQuestionsComponent implements OnInit {
  public ketchup = TeamEnum.KETCHUP;
  public mayo = TeamEnum.MAYO;
  public nuggetsQuestion: IQuestionsNuggets;
  public questionNumber = 0;
  public question: IQuestion | undefined;
  public showAnswer = false;

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private questionsService: QuestionsService
  ) {
    this.nuggetsQuestion = this.questionsService.getQuestionsNuggets();
  }

  ngOnInit() {
    this.activeRoute.params.subscribe((routeParams) => {
      this.loadQuestion(routeParams['id']);
    });
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
    // Si il reste des questions nuggets on continue les questions,
    if (this.questionNumber + 1 < this.nuggetsQuestion.questions.length)
      this.router.navigate([
        `${LstPagesMap.get(Pages.NUGGETS)?.route}/${
          LstPagesMap.get(Pages.QUESTIONS)?.route
        }`,
        this.questionNumber + 1,
      ]);
    // sinon on contiue le jeu
    else this.router.navigate([`${LstPagesMap.get(Pages.HOME)?.route}`]);
  }
}
