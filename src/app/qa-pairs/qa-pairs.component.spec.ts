/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { QaPairsComponent } from './qa-pairs.component';

describe('QaPairsComponent', () => {
  let component: QaPairsComponent;
  let fixture: ComponentFixture<QaPairsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QaPairsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QaPairsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
