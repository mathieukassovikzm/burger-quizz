import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageAdditionComponent } from './page-addition.component';
import { PageAdditionRoutingModule } from './page-addition-routing.module';

@NgModule({
  imports: [CommonModule, PageAdditionRoutingModule],
  exports: [PageAdditionComponent],
  declarations: [PageAdditionComponent],
})
export class PageAdditionModule {}
