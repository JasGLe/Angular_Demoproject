import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Events } from './events/events';
import { NotFound } from './not-found/not-found';
import { DetailsEvent } from './events/details-event/details-event';
import { ReactiveForm } from './reactive-form/reactive-form'
import {AddEventForm} from './events/add-event-form/add-event-form'

export const routes: Routes = [ 
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home }, //page d'acceuil
  { path: 'events', component: Events }, // page des evennements
  { path: 'details/:id', component: DetailsEvent },
  { path: 'login', component: ReactiveForm  }, //pade des forms
  { path: 'add-event', component: AddEventForm},
  { path: '**', component: NotFound  } //page not found
];