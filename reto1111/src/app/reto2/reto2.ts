import { Component } from '@angular/core';
interface Product {
  name: string;
  category: string;
  price: number;
}

@Component({
  selector: 'app-reto2',
  styleUrl: './reto2.css',
  templateUrl: './reto2.html',
})

export class Reto2 {
  products: Product[] = [
    { name: 'Audífonos', category: 'Tecnología', price: 85000 },
    { name: 'Mochila', category: 'Accesorios', price: 120000 },
    { name: 'Botella', category: 'Hogar', price: 45000 },
    { name: 'Teclado', category: 'Tecnología', price: 150000 },
    { name: 'Cuaderno', category: 'Papelería', price: 25000 },
  ];
}
