import { Routes } from '@angular/router';
import { NoFoundPageComponent } from './pages/components/no-found-page/no-found-page';
import { Home } from './pages/components/home/home';

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
