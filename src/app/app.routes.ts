import { Routes } from '@angular/router';
import {HomePage} from './page/home.page/home.page';
import {ContactMePage} from './page/contact-me/contact-me.page';

export const routes: Routes = [
  {path: '', component: HomePage},
  {path: 'contact-me', component: ContactMePage},
  {path: '==', redirectTo: ''},


];
