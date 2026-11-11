import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-reto1',
  styleUrl: './reto1.css',
  templateUrl: './reto1.html',
})
export class Reto1 {
  firstNumber: number | null = null;
  secondNumber: number | null = null;
  result: number | null = null;
  message = '';

  add(): void {
    this.calculate('add');
  }

  subtract(): void {
    this.calculate('subtract');
  }

  private calculate(operation: 'add' | 'subtract'): void {
    if (
      this.firstNumber === null ||
      this.secondNumber === null ||
      !Number.isFinite(this.firstNumber) ||
      !Number.isFinite(this.secondNumber)
    ) {
      this.result = null;
      this.message = 'Ingresa ambos números para continuar.';
      return;
    }

    this.result =
      operation === 'add'
        ? this.firstNumber + this.secondNumber
        : this.firstNumber - this.secondNumber;
    this.message = '';
  }
}
