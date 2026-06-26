import { Directive, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';

@Directive({ selector: '[scrollReveal]' })
export class ScrollRevealDirective implements OnInit, OnDestroy {
  @Input() revealDelay = 0;
  @Input() revealDirection: 'up' | 'left' | 'right' = 'up';

  private observer!: IntersectionObserver;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    const el = this.el.nativeElement as HTMLElement;
    el.style.opacity = '0';
    el.style.transition = `opacity 0.7s ease ${this.revealDelay}ms, transform 0.7s ease ${this.revealDelay}ms`;

    const transforms: Record<string, string> = {
      up: 'translateY(40px)',
      left: 'translateX(-40px)',
      right: 'translateX(40px)',
    };
    el.style.transform = transforms[this.revealDirection];

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1';
          el.style.transform = 'translate(0)';
          this.observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    this.observer.observe(el);
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }
}
