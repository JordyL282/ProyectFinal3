import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-button',
  templateUrl: './menu-button.component.html',
  styleUrls: ['./menu-button.component.scss']
})
export class MenuButtonComponent implements OnInit {

menu:Array<any>=[
  {name:'Muted', icon:'uil uil-microphone'},
  {name:'Home', icon:'uil uil-home'},
  {name:'Share', icon:'uil uil-share'}
];
  constructor() { }

  ngOnInit(): void {
  }

}
