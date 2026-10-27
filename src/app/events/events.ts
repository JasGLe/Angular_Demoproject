import { Component, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { EventM, EVENTS } from '../models/events';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-events',
  imports: [FormsModule, DatePipe, RouterLink],
  templateUrl: './events.html',
  styleUrl: './events.css',
})
export class Events {
  searchevent = signal('');

  events = signal<EventM[]>(EVENTS);

  filteredEvents = computed(() => {
    const term = this.searchevent().trim().toLowerCase();
    return this.events().filter(
      (e) =>
        e.title.toLowerCase().includes(term) ||
        e.location.toLowerCase().includes(term)
    );
  });

  reserveEvent(id: number): void {
    this.events.update((list) =>
      list.map((e) =>
        e.id === id && e.nbPlaces > 0 ? { ...e, nbPlaces: e.nbPlaces - 1 } : e
      )
    );
  }
}
