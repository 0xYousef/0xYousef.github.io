import { Routes } from '@angular/router';
import {HomePage} from './page/home/home.page';
import {ContactMePage} from './page/contact-me/contact-me.page';
import {ServicesPage} from './page/services/services.page';
import {AboutMePage} from './page/aboutme/about-me.page';

export const routes: Routes = [
  {path: '', component: HomePage},
  {path: 'about-me', component: AboutMePage},
  {path:'services', component: ServicesPage},
  {path: 'contact-me', component: ContactMePage},
  {path: '==', redirectTo: ''},
];
