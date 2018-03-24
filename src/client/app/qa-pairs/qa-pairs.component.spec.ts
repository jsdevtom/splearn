import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { QaPairsComponent } from './qa-pairs.component'

describe('QaPairsComponent', () => {
  let component: QaPairsComponent
  let fixture: ComponentFixture<QaPairsComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QaPairsComponent ]
    })
    .compileComponents()
    .catch(_ => console.error('There was an error :'))
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(QaPairsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
