import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageEquipesComponent } from './page-equipes.component';
import { PageEquipesRoutingModule } from './page-equipes-routing.module';

@NgModule({
  imports: [
    CommonModule,
    PageEquipesRoutingModule
  ],
  exports: [PageEquipesComponent],
  declarations: [PageEquipesComponent]
})
export class PageEquipesModule { }
