import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private theme: string = 'dark';

  constructor() {
    const savedTheme = localStorage.getItem('theme');
    this.theme = savedTheme === 'light' || savedTheme === 'dark' ? savedTheme : 'dark';
    this.setTheme(this.theme);
  }

  setTheme(theme: string): void {
    this.theme = theme;
    document.body.classList.remove('dark', 'light');
    document.body.classList.add(theme);
    localStorage.setItem('theme', theme);
  }

  toggleTheme(): void {
    this.setTheme(this.theme === 'dark' ? 'light' : 'dark');
  }

  getTheme(): string {
    return this.theme;
  }
}
