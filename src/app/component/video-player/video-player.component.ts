import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoComponent implements OnInit {
@Input() stream: any;//fuente de media de camara
  constructor() { }

  ngOnInit(): void {
  }

}
