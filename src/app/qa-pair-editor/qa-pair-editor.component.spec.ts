/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { QaPairEditorComponent } from './qa-pair-editor.component';

describe('QaPairEditorComponent', () => {
  let component: QaPairEditorComponent;
  let fixture: ComponentFixture<QaPairEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QaPairEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QaPairEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
