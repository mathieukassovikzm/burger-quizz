import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

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
}
