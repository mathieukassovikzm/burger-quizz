import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/uiService';

@Component({
  selector: 'app-page-fin',
  templateUrl: './page-fin.component.html',
  styleUrls: ['./page-fin.component.scss'],
})
export class PageFinComponent implements OnInit {
  public txtFin;
  constructor(private uiService: UiService) {
    this.txtFin = this.uiService.txtFin;
  }

  ngOnInit() {}
}
