import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuienesComponentComponent } from './quienes-component.component';

describe('QuienesComponentComponent', () => {
  let component: QuienesComponentComponent;
  let fixture: ComponentFixture<QuienesComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuienesComponentComponent]
    });
    fixture = TestBed.createComponent(QuienesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
