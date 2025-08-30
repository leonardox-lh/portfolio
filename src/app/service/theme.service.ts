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
    else {
      this.setTheme('light');
    }
  }

  setTheme(theme: string): void {
    this.theme = theme;
    document.body.className = theme;
    localStorage.setItem('theme', theme);
  }

  toggleTheme(): void {
    if (this.theme === null) {
      this.theme = 'light';
    }
    else
      this.theme = this.theme === 'dark' ? 'light' : 'dark';
    this.setTheme(this.theme);
  }

  getTheme(): string {
    return this.theme;
  }
}
