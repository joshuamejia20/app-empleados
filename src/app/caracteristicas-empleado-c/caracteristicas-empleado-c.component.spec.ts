import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaracteristicasEmpleadoCComponent } from './caracteristicas-empleado-c.component';

describe('CaracteristicasEmpleadoCComponent', () => {
  let component: CaracteristicasEmpleadoCComponent;
  let fixture: ComponentFixture<CaracteristicasEmpleadoCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaracteristicasEmpleadoCComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaracteristicasEmpleadoCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
