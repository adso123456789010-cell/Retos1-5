import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Reto5 } from './reto5';

describe('Reto5', () => {
  let component: Reto5;
  let fixture: ComponentFixture<Reto5>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Reto5],
    }).compileComponents();

    fixture = TestBed.createComponent(Reto5);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a product and calculate its total value', () => {
    component.name = 'Cuaderno';
    component.quantity = 3;
    component.price = 2500;

    component.addProduct();

    expect(component.products).toHaveLength(1);
    fixture.detectChanges();
    expect((fixture.nativeElement as HTMLElement).textContent).toContain('Total: $7500');
    expect(component.message).toBe('');
  });

  it('should reject negative quantity or price', () => {
    component.name = 'Cuaderno';
    component.quantity = -1;
    component.price = 2500;

    component.addProduct();

    expect(component.products).toHaveLength(0);
    expect(component.message).toContain('valores válidos');
  });

  it('should remove a product', () => {
    component.name = 'Cuaderno';
    component.quantity = 3;
    component.price = 2500;
    component.addProduct();

    component.removeProduct(0);

    expect(component.products).toHaveLength(0);
  });
});
