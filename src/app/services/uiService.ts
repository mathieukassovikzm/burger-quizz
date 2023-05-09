import { Injectable } from '@angular/core';
import { playerKetchup, playerMayo, txtFin } from './data/QuizAnnifLolaMumu/ui';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  public lstGames = [];
  public playerKetchup = playerKetchup;
  public playerMayo = playerMayo;
  public txtFin = txtFin;
  constructor() {}
}
