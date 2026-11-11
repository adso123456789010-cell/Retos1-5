import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Reto2 } from './reto2';

describe('Reto2', () => {
  let fixture: ComponentFixture<Reto2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Reto2],
    }).compileComponents();

    fixture = TestBed.createComponent(Reto2);
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render five products', () => {
    const element = fixture.nativeElement as HTMLElement;

    expect(element.querySelectorAll('.product')).toHaveLength(5);
  });

  it('should label only products over 100000 as expensive', () => {
    const element = fixture.nativeElement as HTMLElement;

    expect(element.querySelectorAll('.expensive')).toHaveLength(2);
    expect(element.querySelectorAll('.expensive')[0]?.closest('.product')?.textContent)
      .toContain('Mochila');
    expect(element.querySelectorAll('.expensive')[1]?.closest('.product')?.textContent)
      .toContain('Teclado');
  });
});
