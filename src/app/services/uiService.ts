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
} from './data/QuizLuluJuju';
import {
  title,
  playerKetchup,
  playerMayo,
  txtFin,
  introVideoUrl,
} from './data/QuizLuluJuju/ui';
import { MenuKetchup, MenuMayo } from './data/QuizLuluJuju/Menu';
@Injectable({
  providedIn: 'root',
})
export class UiService {
  public lstGames = [];
  public playerKetchup = playerKetchup;
  public playerMayo = playerMayo;
  public txtFin = txtFin;
  public introVideoUrl = introVideoUrl;
  public menuKetchup = MenuKetchup;
  public menuMayo = MenuMayo;

  constructor() { }

  getTitle(): string {
    return title;
  }
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
