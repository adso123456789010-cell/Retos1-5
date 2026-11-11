import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Student {
  name: string;
  program: string;
  age: number;
}

@Component({
  imports: [FormsModule],
  selector: 'app-reto3',
  styleUrl: './reto3.css',
  templateUrl: './reto3.html',
})
export class Reto3 {
  name = '';
  program = '';
  age: number | null = null;
  message = '';
  students: Student[] = [];

  register(): void {
    if (!this.name.trim() || !this.program.trim() || this.age === null || this.age <= 0) {
      this.message = 'Completa todos los campos con datos válidos.';
      return;
    }

    this.students.push({
      name: this.name.trim(),
      program: this.program.trim(),
      age: this.age,
    });
    this.name = '';
    this.program = '';
    this.age = null;
    this.message = '';
  }
}
