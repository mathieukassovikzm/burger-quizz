import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageSelPoivreComponent } from './page-sel-poivre.component';
import { PageSelPoivreRoutingModule } from './page-sel-poivre-routing.module';

@NgModule({
  imports: [CommonModule, PageSelPoivreRoutingModule],
  exports: [PageSelPoivreComponent],
  declarations: [PageSelPoivreComponent],
})
export class PageSelPoivreModule {}
