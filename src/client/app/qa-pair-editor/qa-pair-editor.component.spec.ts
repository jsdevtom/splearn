/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { QaPairEditorComponent } from './qa-pair-editor.component'

describe('QaPairEditorComponent', () => {
  let component: QaPairEditorComponent
  let fixture: ComponentFixture<QaPairEditorComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QaPairEditorComponent ]
    })
    .compileComponents()
    .catch(_ => console.error('There was an error :'))
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(QaPairEditorComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
