import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Posts3Component } from './posts3.component';

describe('Posts3Component', () => {
  let component: Posts3Component;
  let fixture: ComponentFixture<Posts3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Posts3Component ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Posts3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
