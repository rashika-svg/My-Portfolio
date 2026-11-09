import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  let page: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [App] }).compileComponents();
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    page = fixture.nativeElement as HTMLElement;
  });

  it('introduces the developer by name and role', () => {
    const heading = page.querySelector('h1')?.textContent ?? '';
    expect(heading).toContain('Rashika Varshney');
    expect(heading).toContain('Angular');
  });

  it('renders every section in order', () => {
    const ids = [...page.querySelectorAll('section[id]')].map((section) => section.id);
    expect(ids).toEqual(['top', 'work', 'services', 'working-together', 'about', 'contact']);
  });

  it('has no in-page links pointing at missing sections', () => {
    const targets = [...page.querySelectorAll('a[href^="#"]')].map((a) =>
      a.getAttribute('href')!.slice(1),
    );
    expect(targets.length).toBeGreaterThan(0);
    for (const id of targets) {
      expect(page.querySelector(`#${id}`), `#${id}`).not.toBeNull();
    }
  });

  it('opens external links safely in a new tab', () => {
    const external = [...page.querySelectorAll<HTMLAnchorElement>('a[href^="http"]')];
    expect(external.length).toBeGreaterThan(0);
    for (const link of external) {
      expect(link.target).toBe('_blank');
      expect(link.rel).toContain('noopener');
    }
  });

  it('points the primary calls to action at the right sections', () => {
    const hero = page.querySelector('#top')!;
    expect(hero.querySelector('a.button')?.getAttribute('href')).toBe('#contact');
    expect(hero.querySelector('a.link')?.getAttribute('href')).toBe('#work');
  });
});
