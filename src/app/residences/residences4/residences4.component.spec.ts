import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Residences4Component } from './residences4.component';

describe('Residences4Component', () => {
  let component: Residences4Component;
  let fixture: ComponentFixture<Residences4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Residences4Component]
    });
    fixture = TestBed.createComponent(Residences4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
