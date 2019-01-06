import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Body5Component } from './body5.component';

describe('Body5Component', () => {
  let component: Body5Component;
  let fixture: ComponentFixture<Body5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Body5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Body5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
