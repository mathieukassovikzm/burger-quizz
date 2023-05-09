import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageDessertComponent } from './page-dessert.component';
import { PageDessertRoutingModule } from './page-dessert-routing.module';

@NgModule({
  imports: [CommonModule, PageDessertRoutingModule],
  exports: [PageDessertComponent],
  declarations: [PageDessertComponent],
})
export class PageDessertModule {}
