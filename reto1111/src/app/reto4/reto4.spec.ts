import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Reto4 } from './reto4';

describe('Reto4', () => {
  let component: Reto4;
  let fixture: ComponentFixture<Reto4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Reto4],
    }).compileComponents();

    fixture = TestBed.createComponent(Reto4);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update the light and message for each color', () => {
    const element = fixture.nativeElement as HTMLElement;
    const buttons = element.querySelectorAll('button');

    buttons[0]?.click();
    expect(component.color).toBe('red');
    expect(component.message).toBe('Detenerse');

    buttons[1]?.click();
    expect(component.color).toBe('yellow');
    expect(component.message).toBe('Precaución');

    buttons[2]?.click();
    expect(component.color).toBe('green');
    expect(component.message).toBe('Avanzar');
  });
});
