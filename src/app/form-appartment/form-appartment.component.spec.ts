import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAppartmentComponent } from './form-appartment.component';

describe('FormAppartmentComponent', () => {
  let component: FormAppartmentComponent;
  let fixture: ComponentFixture<FormAppartmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormAppartmentComponent]
    });
    fixture = TestBed.createComponent(FormAppartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
