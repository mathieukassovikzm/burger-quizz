import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelPoivreQuestionsComponent } from './sel-poivre-questions.component';
import { SelPoivreQuestionsRoutingModule } from './sel-poivre-questions-routing.module';
import { ScoresModule } from 'src/app/shared/components/scores/scores.module';

@NgModule({
  imports: [CommonModule, SelPoivreQuestionsRoutingModule, ScoresModule],
  exports: [SelPoivreQuestionsComponent],
  declarations: [SelPoivreQuestionsComponent],
})
export class SelPoivreQuestionsModule {}
