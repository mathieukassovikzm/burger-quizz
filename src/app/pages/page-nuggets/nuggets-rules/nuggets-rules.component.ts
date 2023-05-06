import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LstPagesMap, Pages } from 'src/app/models/routes';

@Component({
  selector: 'app-nuggets-rules',
  templateUrl: './nuggets-rules.component.html',
})
export class NuggetsRulesComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  goToNextPage() {
    this.router.navigate([
      `${LstPagesMap.get(Pages.NUGGETS)?.route}/${
        LstPagesMap.get(Pages.QUESTIONS)?.route
      }`,
      0,
    ]);
  }
}
