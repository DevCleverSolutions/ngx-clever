import { TestBed } from '@angular/core/testing';

import { NgxCleverService } from './ngx-clever.service';

describe('NgxCleverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxCleverService = TestBed.get(NgxCleverService);
    expect(service).toBeTruthy();
  });
});
