import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';
import { EventM, EVENTS } from '../../models/events';

@Component({
  selector: 'app-details-event',
  imports: [RouterLink, DatePipe],
  templateUrl: './details-event.html',
  styleUrl: './details-event.css',
})
export class DetailsEvent {
  // injecter ActivatedRoute pour récupérer l'id depuis l'url
  private route = inject(ActivatedRoute);

  // paramMap.get() renvoie une string, donc on la convertit en nombre
  id = Number(this.route.snapshot.paramMap.get('id'));

  event: EventM | undefined = EVENTS.find((e) => e.id === this.id);
}