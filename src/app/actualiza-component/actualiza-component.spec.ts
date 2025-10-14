import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizaComponent } from './actualiza-component';

describe('ActualizaComponent', () => {
  let component: ActualizaComponent;
  let fixture: ComponentFixture<ActualizaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActualizaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
