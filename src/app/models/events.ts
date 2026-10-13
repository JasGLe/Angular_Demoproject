export interface EventM {
  id: number;
  title: string;
  description: string;
  location: string;
  date: string;
  price: number;
  nbPlaces: number;
}

export const EVENTS: EventM[] = [
  { id: 1, title: 'Angular Workshop', description: 'Introduction to signals and components', location: 'Tunis', date: '2026-10-15', price: 30, nbPlaces: 20 },
  { id: 2, title: 'Web Dev Meetup', description: 'Talks and networking for developers', location: 'Ariana', date: '2026-11-02', price: 15, nbPlaces: 50 },
  { id: 3, title: 'Hackathon', description: '24 hours to build a full-stack project', location: 'Sousse', date: '2026-11-20', price: 0, nbPlaces: 100 },
];