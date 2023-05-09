import { Injectable } from '@angular/core';
import {
  IQuestionsAddition,
  IQuestionsBurger2laMort,
  IQuestionsDessert,
  IQuestionsMenu,
  IQuestionsNuggets,
  IQuestionsSelPoivre,
} from '../models/questions';
import {
  addition,
  burger2laMort,
  dessert,
  menu,
  nuggets,
  selPoivre,
} from './data/QuizAnnifLolaMumu/index';

@Injectable({
  providedIn: 'root',
})
export class QuestionsService {
  constructor() {}

  getQuestionsNuggets(): IQuestionsNuggets {
    return nuggets;
  }

  getQuestionsSelPoivre(): IQuestionsSelPoivre {
    return selPoivre;
  }

  getQuestionsMenu(): IQuestionsMenu {
    return menu;
  }

  getQuestionsDessert(): IQuestionsDessert {
    return dessert;
  }

  getQuestionsAddition(): IQuestionsAddition {
    return addition;
  }

  getQuestionsBurger2laMort(): IQuestionsBurger2laMort {
    return burger2laMort;
  }
}
