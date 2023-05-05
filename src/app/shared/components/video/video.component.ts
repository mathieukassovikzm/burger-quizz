import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LstPagesMap, Pages } from 'src/app/models/routes';
import { IVideo } from 'src/app/models/video';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  @Input() video: IVideo = {};

  constructor(private router: Router) { }

  ngOnInit() {
  }

  videoEnds(): void{
    this.router.navigate([this.video.redirection]);
  }
}
