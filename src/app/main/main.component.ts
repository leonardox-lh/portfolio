import { Component } from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  animations: [
    trigger('enterState', [
      state('void', style({
        transform: 'translateY(10%)',
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
export class MainComponent {

}
