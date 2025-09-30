import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadoHijoC } from './empleado-hijo-c';

describe('EmpleadoHijoC', () => {
  let component: EmpleadoHijoC;
  let fixture: ComponentFixture<EmpleadoHijoC>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpleadoHijoC]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpleadoHijoC);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
