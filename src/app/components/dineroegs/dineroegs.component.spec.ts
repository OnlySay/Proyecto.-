import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DineroegsComponent } from './dineroegs.component';

describe('DineroegsComponent', () => {
  let component: DineroegsComponent;
  let fixture: ComponentFixture<DineroegsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DineroegsComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DineroegsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
