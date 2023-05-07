import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DessertQuestionsComponent } from './dessert-questions.component';
import { ScoresModule } from 'src/app/shared/components/scores/scores.module';
import { DessertQuestionsRoutingModule } from './dessert-questions-routing.module';

@NgModule({
  imports: [CommonModule, DessertQuestionsRoutingModule, ScoresModule],
  exports: [DessertQuestionsComponent],
  declarations: [DessertQuestionsComponent],
})
export class DessertQuestionsModule {}
