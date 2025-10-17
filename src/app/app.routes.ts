import { Routes } from '@angular/router';
import {HomePage} from './page/home.page/home.page';
import {ContactMePage} from './page/contact-me/contact-me.page';
import {ServicesPage} from './page/services.page/services.page';

export const routes: Routes = [
  {path: '', component: HomePage},
  {path:'services', component: ServicesPage},
  {path: 'contact-me', component: ContactMePage},
  {path: '==', redirectTo: ''},


];
