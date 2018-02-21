import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { addappComponent } from './addapp.component';

describe('addappComponent', () => {
  let component: addappComponent;
  let fixture: ComponentFixture<addappComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ addappComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(addappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
