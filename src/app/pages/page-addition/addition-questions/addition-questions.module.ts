import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdditionQuestionsComponent } from './addition-questions.component';
import { AdditionQuestionsRoutingModule } from './addition-questions-routing.module';
import { ScoresModule } from 'src/app/shared/components/scores/scores.module';

@NgModule({
  imports: [CommonModule, AdditionQuestionsRoutingModule, ScoresModule],
  exports: [AdditionQuestionsComponent],
  declarations: [AdditionQuestionsComponent],
})
export class AdditionQuestionsModule {}
