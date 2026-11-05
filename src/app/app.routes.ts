import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'sistema',
    loadComponent: () =>
      import('./features/infrastructure/status-page').then((module) => module.StatusPage),
  },
  { path: '', pathMatch: 'full', redirectTo: 'sistema' },
  { path: '**', redirectTo: 'sistema' },
];
