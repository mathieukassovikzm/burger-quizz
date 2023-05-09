import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageBurgerDeLaMortComponent } from './page-burger-de-la-mort.component';
import { PageBurgerDeLaMortRoutingModule } from './page-burger-de-la-mort-routing.module';

@NgModule({
  imports: [CommonModule, PageBurgerDeLaMortRoutingModule],
  exports: [PageBurgerDeLaMortComponent],
  declarations: [PageBurgerDeLaMortComponent],
})
export class PageBurgerDeLaMortModule {}
