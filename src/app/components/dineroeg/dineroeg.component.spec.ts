import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DineroegComponent } from './dineroeg.component';

describe('DineroegComponent', () => {
  let component: DineroegComponent;
  let fixture: ComponentFixture<DineroegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DineroegComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DineroegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
