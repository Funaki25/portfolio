import { Routes } from '@angular/router';
import { NoFoundPageComponent } from './feature/components/no-found-page/no-found-page';

export const routes: Routes = [
  {
    path: '',
    component: NoFoundPageComponent
  },
  {
    path: '**',
    component: NoFoundPageComponent
  }
];
