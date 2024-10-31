import {Component, HostListener} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {ThemeService} from "../service/theme.service";

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
  private lastScrollTop = 0;
  isHidden = false;
  isMenuOpen: boolean;
  theme: string;
  constructor(private themeService: ThemeService) {
    this.isMenuOpen = false;
    this.theme = this.iconTheme();
  }
  toggleMenu(){
    this.isMenuOpen = !this.isMenuOpen;
  }


  toggleTheme() {
    this.themeService.toggleTheme();
    this.theme = this.iconTheme();
  }

  iconTheme() {
    return this.themeService.getTheme() === 'light' ? 'fa-moon' : 'fa-sun';
  }
}
