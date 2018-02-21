import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { applistComponent } from './applist.component';

describe('applistComponent', () => {
  let component: applistComponent;
  let fixture: ComponentFixture<applistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ applistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(applistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
