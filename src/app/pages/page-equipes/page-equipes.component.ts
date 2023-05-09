import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LstPagesMap, Pages } from 'src/app/models/routes';

@Component({
  selector: 'app-page-equipes',
  templateUrl: './page-equipes.component.html',
  styleUrls: ['./page-equipes.component.scss'],
})
export class PageEquipesComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  goToNextPage() {
    this.router.navigate([
      `${LstPagesMap.get(Pages.NUGGETS)?.route}/${
        LstPagesMap.get(Pages.VIDEO)?.route
      }`,
    ]);
  }
}
