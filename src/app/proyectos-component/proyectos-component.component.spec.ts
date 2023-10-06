import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosComponentComponent } from './proyectos-component.component';

describe('ProyectosComponentComponent', () => {
  let component: ProyectosComponentComponent;
  let fixture: ComponentFixture<ProyectosComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProyectosComponentComponent]
    });
    fixture = TestBed.createComponent(ProyectosComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
