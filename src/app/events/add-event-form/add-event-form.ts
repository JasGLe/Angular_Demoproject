import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { EventM, EVENTS } from '../../models/events';

@Component({
  selector: 'app-add-event-form',
  imports: [ReactiveFormsModule],
  templateUrl: './add-event-form.html',
  styleUrl: './add-event-form.css',
})
export class AddEventForm {
  private router = inject(Router);

  eventForm = new FormGroup({
    title: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(3)],
    }),
    description: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(10)],
    }),
    location: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    date: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    price: new FormControl(0, {
      nonNullable: true,
      validators: [Validators.required, Validators.min(0)],
    }),
    nbPlaces: new FormControl(1, {
      nonNullable: true,
      validators: [Validators.required, Validators.min(1)],
    }),
  });

  save(): void {
    if (this.eventForm.invalid) {
      this.eventForm.markAllAsTouched();
      return;
    }

    // the id is not in the form: take the highest existing id + 1
    const nextId = EVENTS.length > 0 ? Math.max(...EVENTS.map((e) => e.id)) + 1 : 1;

    const newEvent: EventM = {
      id: nextId,
      ...this.eventForm.getRawValue(),
    };

    EVENTS.push(newEvent);
    this.eventForm.reset();
    this.router.navigate(['/events']);
  }
}