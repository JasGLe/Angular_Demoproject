import { Component, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EVENTS, EventM } from '../models/events';
import { RouterLink } from '@angular/router';


interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
  likes: number;
}

@Component({
  selector: 'app-home',
  imports: [FormsModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  searchevent= signal('');
  searchproduct = signal('');
  title = signal('Home');

  products = signal<Product[]>([
    { id: 1, name: 'Product 1', price: 10, quantity: 5, likes: 0 },
    { id: 2, name: 'Product 2', price: 20, quantity: 3, likes: 0 },
    { id: 3, name: 'Product 3', price: 30, quantity: 8, likes: 0 },
    { id: 4, name: 'Product 4', price: 40, quantity: 2, likes: 0 },
    { id: 5, name: 'Product 5', price: 50, quantity: 6, likes: 0 },
  ]);

  filteredProducts = computed(() => {
    const term = this.searchproduct().trim().toLowerCase();
    return this.products().filter((p) => p.name.toLowerCase().includes(term));
  });

  filteredEvents = computed(() => {
    const term = this.searchevent().trim().toLowerCase();
    return this.events().filter((e) => e.title.toLowerCase().includes(term));
  });

  // Valeur totale du stock (prix * quantité pour chaque produit)
  totalValue = computed(() =>
    this.products().reduce((sum, p) => sum + p.price * p.quantity, 0)
  );

  likeProduct(id: number): void {
    this.products.update((list) =>
      list.map((p) => (p.id === id ? { ...p, likes: p.likes + 1 } : p))
    );
  }

  buyProduct(id: number): void {
  this.products.update((list) =>
    list.map((p) =>
      p.id === id && p.quantity > 0 ? { ...p, quantity: p.quantity - 1 } : p
    )
  );
  }

  removeProduct(id: number): void {
    this.products.update((list) => list.filter((p) => p.id !== id));
  }

  events = signal<EventM[]>(EVENTS);

reserveEvent(id: number): void {
  this.events.update((list) =>
    list.map((e) =>
      e.id === id && e.nbPlaces > 0 ? { ...e, nbPlaces: e.nbPlaces - 1 } : e
    )
  );
}
}