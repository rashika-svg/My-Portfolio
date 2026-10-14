import { Component, DestroyRef, afterNextRender, inject, signal } from '@angular/core';
import { navLinks } from '../../content/navigation';
import { profile } from '../../content/profile';
import { Icon } from '../../shared/icon/icon';

@Component({
  selector: 'app-site-header',
  imports: [Icon],
  templateUrl: './site-header.html',
  styleUrl: './site-header.css',
  host: {
    class: 'sticky top-0 z-40 block',
    '(window:scroll)': 'updateScrolled()',
    '(document:keydown.escape)': 'closeMenu()',
  },
})
export class SiteHeader {
  protected readonly profile = profile;
  protected readonly links = navLinks;
  protected readonly menuOpen = signal(false);
  protected readonly scrolled = signal(false);
  protected readonly activeId = signal<string | null>(null);

  constructor() {
    const destroyRef = inject(DestroyRef);

    afterNextRender(() => {
      this.updateScrolled();
      const observer = this.observeSections();
      destroyRef.onDestroy(() => observer?.disconnect());
    });
  }

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }

  protected updateScrolled(): void {
    this.scrolled.set(window.scrollY > 8);
  }

  // Marks the section crossing a thin band near the middle of the viewport as active.
  private observeSections(): IntersectionObserver | undefined {
    if (typeof IntersectionObserver === 'undefined') return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) this.activeId.set(entry.target.id);
        }
      },
      { rootMargin: '-40% 0px -55% 0px' },
    );

    for (const id of ['top', ...this.links.map((link) => link.id), 'contact']) {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    }
    return observer;
  }
}
