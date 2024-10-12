import {Component, HostListener, Input} from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent {
  @Input() title: string | undefined;
  opacity: number = 1;

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    // Actualizar la opacidad en función del scroll
    this.opacity = 1 - (scrollTop / 1000); // Ajusta el valor según la sensibilidad que desees
    if (this.opacity < 0) {
      this.opacity = 0; // No permitir opacidad negativa
    }
  }
}
