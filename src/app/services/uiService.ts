import { Injectable } from '@angular/core';
import {
  additionRules,
  menuRules,
  playerKetchup,
  playerMayo,
} from './data/QuizAnnifLolaMumu/ui';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  public lstGames = [];
  public playerKetchup = playerKetchup;
  public playerMayo = playerMayo;
  public menuRules = menuRules;
  public additionRules = additionRules;
  constructor() {}
}
