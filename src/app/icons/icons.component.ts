import { Component } from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css'],
  animations: [
    trigger('enterState', [
      state('void', style({
        transform: 'translateX(-100%)',
        opacity: 0
      })),
      transition(':enter',[
        animate(800,style({
          transform: 'translateX(0)',
          opacity: 1
        }))
      ]),
    ]),
    trigger('enterState2', [
      state('void', style({
        transform: 'translateX(100%)',
        opacity: 0
      })),
      transition(':enter',[
        animate(800,style({
          transform: 'translateX(0)',
          opacity: 1
        }))
      ]),
    ]),
  ],
})
export class IconsComponent {

  isOpen = false;

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }
}
