import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'menu',
    loadChildren: () => import('./features/menu/menu.module').then(m => m.MenuModule)
  },
  {
    path: 'marvel-search',
    loadChildren: () => import('./features/marvel-search/marvel-search.module').then(m => m.MarvelSearchModule)
  },
  {
    path: '',
    redirectTo: '/menu',
    pathMatch: 'full'
  }
];
