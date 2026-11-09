import { Component } from '@angular/core';
import { SiteFooter } from './layout/site-footer/site-footer';
import { SiteHeader } from './layout/site-header/site-header';
import { About } from './sections/about/about';
import { Contact } from './sections/contact/contact';
import { Intro } from './sections/intro/intro';
import { Services } from './sections/services/services';
import { Work } from './sections/work/work';
import { WorkingTogether } from './sections/working-together/working-together';

@Component({
  selector: 'app-root',
  imports: [SiteHeader, Intro, Work, Services, WorkingTogether, About, Contact, SiteFooter],
  templateUrl: './app.html',
})
export class App {}
