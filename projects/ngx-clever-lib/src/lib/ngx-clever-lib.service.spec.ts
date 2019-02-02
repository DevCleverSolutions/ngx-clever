import { TestBed } from '@angular/core/testing';

import { NgxCleverLibService } from './ngx-clever-lib.service';

describe('NgxCleverLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxCleverLibService = TestBed.get(NgxCleverLibService);
    expect(service).toBeTruthy();
  });
});
