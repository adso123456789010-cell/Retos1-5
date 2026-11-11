import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Reto3 } from './reto3';

describe('Reto3', () => {
  let component: Reto3;
  let fixture: ComponentFixture<Reto3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Reto3],
    }).compileComponents();

    fixture = TestBed.createComponent(Reto3);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a student with valid data', () => {
    component.name = 'Ana';
    component.program = 'Ingeniería';
    component.age = 20;

    component.register();

    expect(component.students).toHaveLength(1);
    expect(component.students[0]?.name).toBe('Ana');
    expect(component.message).toBe('');
  });

  it('should show a message when data is missing', () => {
    component.name = 'Ana';

    component.register();

    expect(component.students).toHaveLength(0);
    expect(component.message).toBe('Completa todos los campos con datos válidos.');
  });
});
