import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaddaPreloader3Component } from './ladda-preloader3.component';

describe('LaddaPreloader3Component', () => {
  let component: LaddaPreloader3Component;
  let fixture: ComponentFixture<LaddaPreloader3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaddaPreloader3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaddaPreloader3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
