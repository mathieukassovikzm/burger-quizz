import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LstPagesMap, Pages } from 'src/app/models/routes';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.scss']
})
export class PageHomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  start(): void{
    this.router.navigate([LstPagesMap.get(Pages.INTRO)?.route]);
  }
}
