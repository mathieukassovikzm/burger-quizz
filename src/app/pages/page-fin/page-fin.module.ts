import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageFinComponent } from './page-fin.component';
import { PageFinRoutingModule } from './page-fin-routing.module';

@NgModule({
  imports: [CommonModule, PageFinRoutingModule],
  declarations: [PageFinComponent],
})
export class PageFinModule {}
