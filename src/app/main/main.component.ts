import { Component, OnInit, OnDestroy } from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  animations: [
    trigger('enterState', [
      state('void', style({ transform: 'translateY(10%)', opacity: 0 })),
      transition(':enter', [animate(800, style({ transform: 'translateY(0)', opacity: 1 }))]),
    ]),
  ],
})
export class MainComponent implements OnInit, OnDestroy {
  roles = ['Full Stack Developer', 'Frontend Specialist', 'Backend Engineer', 'UI/UX Enthusiast'];
  displayedText = '';
  showCursor = true;

  private roleIndex = 0;
  private charIndex = 0;
  private isDeleting = false;
  private timer: any;
  private cursorTimer: any;

  ngOnInit() {
    this.typeLoop();
    this.cursorTimer = setInterval(() => this.showCursor = !this.showCursor, 530);
  }

  ngOnDestroy() {
    clearTimeout(this.timer);
    clearInterval(this.cursorTimer);
  }

  private typeLoop() {
    const current = this.roles[this.roleIndex];
    const speed = this.isDeleting ? 50 : 100;

    if (!this.isDeleting) {
      this.displayedText = current.slice(0, ++this.charIndex);
      if (this.charIndex === current.length) {
        this.timer = setTimeout(() => { this.isDeleting = true; this.typeLoop(); }, 1800);
        return;
      }
    } else {
      this.displayedText = current.slice(0, --this.charIndex);
      if (this.charIndex === 0) {
        this.isDeleting = false;
        this.roleIndex = (this.roleIndex + 1) % this.roles.length;
      }
    }
    this.timer = setTimeout(() => this.typeLoop(), speed);
  }
}
