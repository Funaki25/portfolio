import { Routes } from '@angular/router';
import { NoFoundPageComponent } from './feature/components/no-found-page/no-found-page';
import { Home } from './feature/components/home/home/home';

export const routes: Routes = [
  {
    path: '',
    component: NoFoundPageComponent
  },
  {
    path: 'Acceuil',
    component: Home
  },
  {
    path: '**',
    component: NoFoundPageComponent
  }
];
