import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxCleverComponent } from './ngx-clever.component';

describe('NgxCleverComponent', () => {
  let component: NgxCleverComponent;
  let fixture: ComponentFixture<NgxCleverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxCleverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxCleverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
