import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageMenuComponent } from './page-menu.component';
import { PageMenuRoutingModule } from './page-menu-routing.module';

@NgModule({
  imports: [CommonModule, PageMenuRoutingModule],
  exports: [PageMenuComponent],
  declarations: [PageMenuComponent],
})
export class PageMenuModule {}
