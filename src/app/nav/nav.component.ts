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
  constructor(private themeService: ThemeService) {
    this.isMenuOpen = false;
  }
  toggleMenu(){
    this.isMenuOpen = !this.isMenuOpen;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > this.lastScrollTop) {
      this.isHidden = true;
    } else {
      this.isHidden = false;
    }

    this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Para evitar valores negativos
  }

  toggleTheme() {
    this.themeService.toggleTheme(); // Llama al servicio para cambiar el tema
  }

  get currentTheme(): string {
    return this.themeService.getTheme(); // Obtiene el tema actual
  }
}
