import { Routes } from '@angular/router';
import {HomePagePage} from './page/home-page.page/home-page.page';

export const routes: Routes = [
  {path: '', component: HomePagePage},
  {path: '==', redirectTo: ''},


];
