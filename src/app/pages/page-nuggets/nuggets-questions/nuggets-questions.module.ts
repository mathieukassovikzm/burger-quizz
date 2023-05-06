import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ScoresModule } from 'src/app/shared/components/scores/scores.module';
import { NuggetsQuestionsRoutingModule } from './nuggets-questions-routing.module';
import { NuggetsQuestionsComponent } from './nuggets-questions.component';

@NgModule({
  imports: [CommonModule, NuggetsQuestionsRoutingModule, ScoresModule],
  exports: [NuggetsQuestionsComponent],
  declarations: [NuggetsQuestionsComponent],
})
export class NuggetsQuestionsModule {}
