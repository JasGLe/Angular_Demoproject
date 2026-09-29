import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Events } from './events/events';
import { NotFound } from './not-found/not-found';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'events', component: Events },
  { path: '**', component: NotFound  },

];