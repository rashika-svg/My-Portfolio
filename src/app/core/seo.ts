import { DOCUMENT, Injectable, inject } from '@angular/core';
import { Meta, MetaDefinition, Title } from '@angular/platform-browser';
import { profile, site } from '../content/profile';
import { coreSkills } from '../content/skills';

// Runs during prerendering, so crawlers and link previews get the tags in static HTML.
@Injectable({ providedIn: 'root' })
export class Seo {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);

  apply(): void {
    const imageUrl = new URL(site.ogImage, site.url).href;

    const tags: MetaDefinition[] = [
      { name: 'description', content: site.description },
      { name: 'author', content: profile.name },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: profile.name },
      { property: 'og:title', content: site.title },
      { property: 'og:description', content: site.description },
      { property: 'og:url', content: site.url },
      { property: 'og:image', content: imageUrl },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: site.title },
      { name: 'twitter:description', content: site.description },
      { name: 'twitter:image', content: imageUrl },
    ];

    this.title.setTitle(site.title);
    tags.forEach((tag) => this.meta.updateTag(tag));

    this.upsert('link[rel="canonical"]', 'link', { rel: 'canonical', href: site.url });
    this.upsert('script#structured-data', 'script', {
      id: 'structured-data',
      type: 'application/ld+json',
    }).textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: profile.name,
      jobTitle: profile.role,
      url: site.url,
      email: `mailto:${profile.email}`,
      sameAs: [profile.linkedin, profile.github],
      knowsAbout: coreSkills,
      address: { '@type': 'PostalAddress', addressCountry: 'IN' },
    });
  }

  private upsert(selector: string, tagName: string, attrs: Record<string, string>): HTMLElement {
    const head = this.document.head;
    const element =
      head.querySelector<HTMLElement>(selector) ??
      head.appendChild(this.document.createElement(tagName));
    for (const [key, value] of Object.entries(attrs)) {
      element.setAttribute(key, value);
    }
    return element;
  }
}
