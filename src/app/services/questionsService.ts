import { Injectable } from '@angular/core';
import {
  IQuestion,
  IQuestionsAddition,
  IQuestionsBurger2laMort,
  IQuestionsMenu,
  IQuestionsNuggets,
  IQuestionsSelPoivre,
} from '../models/questions';
import { nuggets } from './data/QuizAnnifLolaMumu/Nuggets';
import { menu } from './data/QuizAnnifLolaMumu/Menu';
import { selPoivre } from './data/QuizAnnifLolaMumu/SelPoivre';
import { addition } from './data/QuizAnnifLolaMumu/Addition';

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

  getQuestionsAddition(): IQuestionsAddition {
    return addition;
  }

  getQuestionsBurger2laMort(): IQuestionsBurger2laMort {
    return nuggets;
  }
}
