import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private theme: string = 'light';
  constructor() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      this.theme = savedTheme;
      this.setTheme(this.theme);
    }
  }

  setTheme(theme: string): void {
    this.theme = theme;
    document.body.className = theme;
    localStorage.setItem('theme', theme);
  }

  toggleTheme(): void {
    this.theme = this.theme === 'light' ? 'dark' : 'light';
    this.setTheme(this.theme);
  }

  getTheme(): string {
    return this.theme;
  }
}
