import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LstPagesMap, Pages } from 'src/app/models/routes';
import { IRules } from 'src/app/models/rules';
import { UiService } from 'src/app/services/uiService';

@Component({
  selector: 'app-page-rules',
  templateUrl: './page-rules.component.html',
})
export class PageRulesComponent implements OnInit {
  private ruleNuggets: IRules = {
    currentPage: Pages.NUGGETS,
    game: 'Nuggets',
    rules: [
      '1 questions',
      '4 propositions',
      '1 seule bonne réponse',
      '1 miam par bonne réponse',
    ],
  };

  private ruleSelPoivre: IRules = {
    currentPage: Pages.SELPOIVRE,
    game: 'Sel / Poivre',
    rules: [
      'Quiz de rapidité',
      '1 questions',
      '3 propositions',
      '1 seule bonne réponse',
      '1 miam par bonne réponse',
    ],
  };

  private ruleMenu: IRules = {
    currentPage: Pages.MENU,
    game: 'Menu',
    rules: this.uiService.menuRules,
  };

  private ruleDessert: IRules = {
    currentPage: Pages.DESSERT,
    game: 'Dessert',
    rules: [
      'Mélange 3 ganaches',
      'mélange de 3 visages',
      '40s',
      '1 miam par bonne réponse',
    ],
  };

  private ruleAddition: IRules = {
    currentPage: Pages.ADDITION,
    game: "L'addition",
    rules: this.uiService.additionRules,
  };

  public rule = this.ruleNuggets;
  constructor(private router: Router, private uiService: UiService) {}

  ngOnInit() {
    const currentRoute = this.router.url.slice(1).replace(`/rules`, '');
    switch (currentRoute) {
      case LstPagesMap.get(Pages.ADDITION)!.route:
        this.rule = this.ruleAddition;
        break;
      case LstPagesMap.get(Pages.MENU)!.route:
        this.rule = this.ruleMenu;
        break;
      case LstPagesMap.get(Pages.NUGGETS)!.route:
        this.rule = this.ruleNuggets;
        break;
      case LstPagesMap.get(Pages.SELPOIVRE)!.route:
        this.rule = this.ruleSelPoivre;
        break;
      case LstPagesMap.get(Pages.DESSERT)!.route:
        this.rule = this.ruleDessert;
        break;
      default:
        break;
    }
  }

  goToNextPage() {
    this.router.navigate([
      `${LstPagesMap.get(this.rule.currentPage)?.route}/${
        LstPagesMap.get(Pages.QUESTIONS)?.route
      }`,
      0,
    ]);
  }

  isEven(n: number): boolean {
    return n % 2 == 0;
  }

  isOdd(n: number): boolean {
    return Math.abs(n % 2) == 1;
  }
}
