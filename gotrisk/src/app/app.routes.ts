import { Routes } from '@angular/router';

import { HomePage } from './Pages/HomePage/home-page.component'
import { GamePage } from './Pages/GamePage/game-page.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePage
  },
  {
    path: 'game',
    component: GamePage
  }
];
