import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TeamEnum } from '../models/questions';

const scoreMin = 0;
const scoreMax = 25;

@Injectable({
  providedIn: 'root',
})
export class ScoresService {
  public scoreKetchup = 0;
  private scoreKetchup$$ = new BehaviorSubject<number>(this.scoreKetchup);
  public scoreKetchup$ = this.scoreKetchup$$.asObservable();

  public scoreMayo = 0;
  private scoreMayo$$ = new BehaviorSubject<number>(this.scoreMayo);
  public scoreMayo$ = this.scoreMayo$$.asObservable();

  public winner = TeamEnum.KETCHUP;

  constructor() {}

  changeScoreKetchup(diff: number): void {
    if (
      scoreMin <= this.scoreKetchup + diff &&
      this.scoreKetchup + diff <= scoreMax
    ) {
      this.scoreKetchup += diff;
      this.scoreKetchup$$.next(this.scoreKetchup);
    }
  }

  changeScoreMayo(diff: number): void {
    if (
      scoreMin <= this.scoreMayo + diff &&
      this.scoreMayo + diff <= scoreMax
    ) {
      this.scoreMayo += diff;
      this.scoreMayo$$.next(this.scoreMayo);
    }
  }

  setWinner(): TeamEnum {
    if (this.scoreKetchup < this.scoreMayo) return TeamEnum.MAYO;
    else return TeamEnum.KETCHUP;
  }

  getWinner(): TeamEnum {
    return this.winner === TeamEnum.KETCHUP ? TeamEnum.KETCHUP : TeamEnum.MAYO;
  }

  getLooser(): TeamEnum {
    return this.winner === TeamEnum.KETCHUP ? TeamEnum.MAYO : TeamEnum.KETCHUP;
  }
}
