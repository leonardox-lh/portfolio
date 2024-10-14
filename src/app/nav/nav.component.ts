import { Component } from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  animations: [
    trigger('enterState', [
      state('void', style({
        transform: 'translateY(-100%)',
        opacity: 0
      })),
      transition(':enter',[
        animate(800,style({
          transform: 'translateY(0)',
          opacity: 1
        }))
      ]),
    ]),
  ],
})
export class NavComponent {
  isMenuOpen: boolean;
  constructor() {
    this.isMenuOpen = false;
  }
  toggleMenu(){
    this.isMenuOpen = !this.isMenuOpen;
  }

}
