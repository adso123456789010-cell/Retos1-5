import { Component } from '@angular/core';

@Component({
  selector: 'app-reto4',
  styleUrl: './reto4.css',
  templateUrl: './reto4.html',
})
export class Reto4 {
  color = '#d9d9d9';
  
  message = 'Selecciona un color.';

  setLight(color: 'red' | 'yellow' | 'green'): void {
    if (color === 'red') {
      this.color = 'red';
      this.message = 'Detenerse';
    } else if (color === 'yellow') {
      this.color = 'yellow';
      this.message = 'Precaución';
    } else {
      this.color = 'green';
      this.message = 'Avanzar';
    }
  }
}
