import { Component, HostListener } from '@angular/core';
import { animate, state, style, transition, trigger } from "@angular/animations";
import { ThemeService } from "../service/theme.service";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  animations: [
    trigger('enterState', [
      state('void', style({ transform: 'translateY(-100%)', opacity: 0 })),
      transition(':enter', [
        animate(700, style({ transform: 'translateY(0)', opacity: 1 }))
      ]),
    ]),
  ],
})
export class NavComponent {
  private lastScrollTop = 0;
  isHidden = false;
  scrolled = false;
  isMenuOpen = false;
  theme: string;
  activeSection = 'home';

  constructor(private themeService: ThemeService) {
    this.theme = this.iconTheme();
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    this.scrolled = currentScroll > 30;
    // Hide on scroll down, show on scroll up (never hide near the top)
    this.isHidden = currentScroll > this.lastScrollTop && currentScroll > 160 && !this.isMenuOpen;
    this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;

    // Active section highlight
    const sections = document.querySelectorAll('section');
    sections.forEach((section: any) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 120 && rect.bottom >= 120) {
        this.activeSection = section.id;
      }
    });
  }

  toggleTheme() {
    this.themeService.toggleTheme();
    this.theme = this.iconTheme();
  }

  iconTheme() {
    return this.themeService.getTheme() === 'light' ? 'fa-moon' : 'fa-sun';
  }

  scrollToSection(sectionId: string) {
    this.isMenuOpen = false;
    const element = document.getElementById(sectionId);
    if (element) {
      const topPosition = element.getBoundingClientRect().top + window.pageYOffset - 70;
      window.scrollTo({ top: topPosition, behavior: 'smooth' });
      this.activeSection = sectionId;
    }
  }
}
