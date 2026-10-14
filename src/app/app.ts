import { Component } from '@angular/core';
import { SiteFooter } from './layout/site-footer/site-footer';
import { SiteHeader } from './layout/site-header/site-header';
import { About } from './sections/about/about';
import { Contact } from './sections/contact/contact';
import { Hero } from './sections/hero/hero';
import { Process } from './sections/process/process';
import { Services } from './sections/services/services';
import { Work } from './sections/work/work';

@Component({
  selector: 'app-root',
  imports: [SiteHeader, Hero, Work, Services, Process, About, Contact, SiteFooter],
  templateUrl: './app.html',
})
export class App {}
