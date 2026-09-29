import { Component, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { EventM } from '../models/events';

@Component({
  selector: 'app-events',
  imports: [FormsModule, DatePipe],
  templateUrl: './events.html',
  styleUrl: './events.css',
})
export class Events {
  searchevent = signal('');

  events = signal<EventM[]>([
    { id: 1, title: 'Angular Workshop', description: 'Introduction to signals and components', location: 'Tunis', date: '2026-10-15', price: 30, nbPlaces: 20 },
    { id: 2, title: 'Web Dev Meetup', description: 'Talks and networking for developers', location: 'Ariana', date: '2026-11-02', price: 15, nbPlaces: 50 },
    { id: 3, title: 'Hackathon', description: '24 hours to build a full-stack project', location: 'Sousse', date: '2026-11-20', price: 0, nbPlaces: 100 },
  ]);

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