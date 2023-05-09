import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageRulesComponent } from './page-rules.component';
import { PageRulesRoutingModule } from './page-rules-routing.module';

@NgModule({
  imports: [CommonModule, PageRulesRoutingModule],
  declarations: [PageRulesComponent],
})
export class PageRulesModule {}
