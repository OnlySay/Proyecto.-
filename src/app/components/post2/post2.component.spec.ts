import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Post2Component } from './post2.component';

describe('Post2Component', () => {
  let component: Post2Component;
  let fixture: ComponentFixture<Post2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Post2Component ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Post2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
