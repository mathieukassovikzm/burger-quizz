import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BurgerDeLaMortQuestionsRoutingModule } from './burger-de-la-mort-questions-routing.module';
import { BurgerDeLaMortQuestionsComponent } from './burger-de-la-mort-questions.component';

@NgModule({
  imports: [CommonModule, BurgerDeLaMortQuestionsRoutingModule],
  exports: [BurgerDeLaMortQuestionsComponent],
  declarations: [BurgerDeLaMortQuestionsComponent],
})
export class BurgerDeLaMortQuestionsModule {}
