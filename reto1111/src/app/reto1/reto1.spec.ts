import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Reto1 } from './reto1';

describe('Reto1', () => {
  let component: Reto1;
  let fixture: ComponentFixture<Reto1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Reto1],
    }).compileComponents();

    fixture = TestBed.createComponent(Reto1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add two numbers', () => {
    component.firstNumber = 24;
    component.secondNumber = 8;

    component.add();

    expect(component.result).toBe(32);
    expect(component.message).toBe('');
  });

  it('should subtract two numbers', () => {
    component.firstNumber = 24;
    component.secondNumber = 8;

    component.subtract();

    expect(component.result).toBe(16);
    expect(component.message).toBe('');
  });

  it('should ask for both numbers before calculating', () => {
    component.firstNumber = 24;

    component.add();

    expect(component.result).toBeNull();
    expect(component.message).toBe('Ingresa ambos números para continuar.');
  });

  it('should render the calculator inputs and actions', () => {
    const element = fixture.nativeElement as HTMLElement;

    expect(element.querySelectorAll('input[type="number"]')).toHaveLength(2);
    expect(element.textContent).toContain('Sumar');
    expect(element.textContent).toContain('Restar');
  });
});
