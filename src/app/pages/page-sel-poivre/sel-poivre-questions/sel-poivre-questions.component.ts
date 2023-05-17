import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  IQuestionSelPoivre,
  IQuestionsNuggets,
  TeamEnum,
} from 'src/app/models/questions';
import { LstPagesMap, Pages } from 'src/app/models/routes';
import { QuestionsService } from 'src/app/services/questionsService';

@Component({
  selector: 'app-sel-poivre-questions',
  templateUrl: './sel-poivre-questions.component.html',
})
export class SelPoivreQuestionsComponent implements OnInit {
  public ketchup = TeamEnum.KETCHUP;
  public mayo = TeamEnum.MAYO;
  public selPoivreQuestion: IQuestionsNuggets;
  public questionNumber = 0;
  public question: IQuestionSelPoivre | undefined;
  public showAnswer = false;

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private questionsService: QuestionsService
  ) {
    this.selPoivreQuestion = this.questionsService.getQuestionsSelPoivre();
  }

  ngOnInit() {
    this.activeRoute.params.subscribe((routeParams) => {
      this.loadQuestion(Number(routeParams['id']));
    });
  }

  loadQuestion(id: number) {
    this.showAnswer = false;
    this.questionNumber = id;
    this.question =
      this.selPoivreQuestion.questions.length > this.questionNumber
        ? this.selPoivreQuestion.questions.at(this.questionNumber)
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
    if (this.questionNumber + 1 < this.selPoivreQuestion.questions.length)
      this.router.navigate([
        `${LstPagesMap.get(Pages.SELPOIVRE)?.route}/${
          LstPagesMap.get(Pages.QUESTIONS)?.route
        }`,
        this.questionNumber + 1,
      ]);
    // sinon on contiue le jeu
    else
      this.router.navigate([
        `${LstPagesMap.get(Pages.MENU)?.route}/${
          LstPagesMap.get(Pages.VIDEO)?.route
        }`,
      ]);
  }
}
