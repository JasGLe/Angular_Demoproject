export interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
  likes: number;
}

export const PRODUCTS: Product[] = [
  { id: 1, name: 'Product 1', price: 10, quantity: 5, likes: 0 },
  { id: 2, name: 'Product 2', price: 20, quantity: 3, likes: 0 },
  { id: 3, name: 'Product 3', price: 30, quantity: 8, likes: 0 },
  { id: 4, name: 'Product 4', price: 40, quantity: 2, likes: 0 },
  { id: 5, name: 'Product 5', price: 50, quantity: 6, likes: 0 },
];