import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuQuestionsComponent } from './menu-questions.component';
import { ScoresModule } from 'src/app/shared/components/scores/scores.module';
import { MenuQuestionsRoutingModule } from './menu-questions-routing.module';

@NgModule({
  imports: [CommonModule, MenuQuestionsRoutingModule, ScoresModule],
  exports: [MenuQuestionsComponent],
  declarations: [MenuQuestionsComponent],
})
export class MenuQuestionsModule {}
