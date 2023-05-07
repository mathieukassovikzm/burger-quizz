import { Injectable } from '@angular/core';
import { playerKetchup, playerMayo } from './data/QuizAnnifLolaMumu/ui';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  public lstGames = [];
  public playerKetchup = playerKetchup;
  public playerMayo = playerMayo;
  constructor() {}
}
