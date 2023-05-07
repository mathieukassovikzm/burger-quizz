import { Component } from '@angular/core';
import { UiService } from './services/uiService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'burger-quizz';
  public playerKetchup = this.uiService.playerKetchup;
  public playerMayo = this.uiService.playerMayo;
  constructor(private uiService: UiService) {}

  goToBurgerMortKetchup() {}
  goToBurgerMortMayo() {}
}
