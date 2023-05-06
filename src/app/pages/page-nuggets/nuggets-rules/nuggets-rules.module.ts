import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NuggetsRulesComponent } from './nuggets-rules.component';
import { NuggetsRulesRoutingModule } from './nuggets-rules-routing.module';

@NgModule({
  imports: [CommonModule, NuggetsRulesRoutingModule],
  exports: [NuggetsRulesComponent],
  declarations: [NuggetsRulesComponent],
})
export class NuggetsRulesModule {}
