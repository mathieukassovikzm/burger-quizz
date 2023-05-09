import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PageNuggetsRoutingModule } from './page-nuggets-routing.module';
import { PageNuggetsComponent } from './page-nuggets.component';

@NgModule({
  imports: [CommonModule, PageNuggetsRoutingModule],
  exports: [PageNuggetsComponent],
  declarations: [PageNuggetsComponent],
})
export class PageNuggetsModule {}
