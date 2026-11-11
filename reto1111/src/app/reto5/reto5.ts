import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Product {
  name: string;
  quantity: number;
  price: number;
}

@Component({
  imports: [FormsModule],
  selector: 'app-reto5',
  styleUrl: './reto5.css',
  templateUrl: './reto5.html',
})
export class Reto5 {
  name = '';
  quantity: number | null = null;
  price: number | null = null;
  message = '';
  products: Product[] = [];

  addProduct(): void {
    if (
      !this.name.trim() ||
      this.quantity === null ||
      this.price === null ||
      !Number.isFinite(this.quantity) ||
      !Number.isFinite(this.price) ||
      this.quantity < 0 ||
      this.price < 0
    ) {
      this.message = 'Ingresa un nombre y valores válidos (cero o mayores).';
      return;
    }

    this.products.push({
      name: this.name.trim(),
      quantity: this.quantity,
      price: this.price,
    });
    this.name = '';
    this.quantity = null;
    this.price = null;
    this.message = '';
  }

  removeProduct(index: number): void {
    this.products.splice(index, 1);
  }
}
