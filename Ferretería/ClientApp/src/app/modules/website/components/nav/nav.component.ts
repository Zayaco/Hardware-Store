import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  activeBurguer = false;
  counter = 0;
  constructor() {

  }

  toggleBurguer(){
    this.activeBurguer = !this.activeBurguer;
  }

}
