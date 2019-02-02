import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxCleverLibComponent } from './ngx-clever-lib.component';

describe('NgxCleverLibComponent', () => {
  let component: NgxCleverLibComponent;
  let fixture: ComponentFixture<NgxCleverLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxCleverLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxCleverLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
