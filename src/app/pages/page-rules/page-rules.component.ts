import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LstPagesMap, Pages } from 'src/app/models/routes';
import { IRules } from 'src/app/models/rules';
import { additionTheme } from 'src/app/services/data/QuizAnnifLolaMumu/Addition';
import {
  MenuKetchup,
  MenuMayo,
} from 'src/app/services/data/QuizAnnifLolaMumu/Menu';
import { ScoresService } from 'src/app/services/scoresService';
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
    rules: [
      '4 questions thématiques',
      'Aucune proposition',
      '2 menus:',
      MenuKetchup,
      MenuMayo,
      '1 miam par bonne réponse',
    ],
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
    rules: [
      'Quiz de rapidité',
      'Catégorie :',
      additionTheme,
      '1 miam par bonne réponse',
    ],
  };

  private ruleBurger2laMort: IRules = {
    currentPage: Pages.BURGERDELAMORT,
    game: 'Burger de la mort',
    rules: [
      '10 questions à la suite',
      'A la fin des 10 questions',
      "Donnez les 10 réponses dans l'ordre",
      'Questions très simples',
      'Il ne faut pas souffler',
    ],
  };

  public rule = this.ruleNuggets;
  public currentRoute = '';
  private isBurgerDeLaMort = false;

  constructor(private router: Router, private scoresService: ScoresService) {}

  ngOnInit() {
    this.currentRoute = this.router.url.slice(1).replace(`/rules`, '');
    switch (this.currentRoute) {
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
      case LstPagesMap.get(Pages.BURGERDELAMORT)!.route:
        this.rule = this.ruleBurger2laMort;
        this.isBurgerDeLaMort = true;
        break;
      default:
        break;
    }
  }

  goToNextPage() {
    if (this.isBurgerDeLaMort) {
      // On récupère le looser qui joue le Burger de la mort en premier
      const looser = this.scoresService.getLooser();
      this.router.navigate([
        `${LstPagesMap.get(this.rule.currentPage)?.route}/${
          LstPagesMap.get(Pages.QUESTIONS)?.route
        }`,
        looser,
      ]);
    } else {
      this.router.navigate([
        `${LstPagesMap.get(this.rule.currentPage)?.route}/${
          LstPagesMap.get(Pages.QUESTIONS)?.route
        }`,
        0,
      ]);
    }
  }

  isEven(n: number): boolean {
    return n % 2 == 0;
  }

  isOdd(n: number): boolean {
    return Math.abs(n % 2) == 1;
  }
}
