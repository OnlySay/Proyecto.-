import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Post3Component } from './post3.component';

describe('Post3Component', () => {
  let component: Post3Component;
  let fixture: ComponentFixture<Post3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Post3Component ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Post3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
