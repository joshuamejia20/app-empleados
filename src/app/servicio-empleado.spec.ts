import { TestBed } from '@angular/core/testing';

import { ServicioEmpleado } from './servicio-empleado';

describe('ServicioEmpleado', () => {
  let service: ServicioEmpleado;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioEmpleado);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
