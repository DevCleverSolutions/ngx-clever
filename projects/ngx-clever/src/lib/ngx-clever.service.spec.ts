import { TestBed, inject } from '@angular/core/testing';

import { NgxCleverService } from './ngx-clever.service';

describe('NgxCleverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgxCleverService]
    });
  });

  it('should be created', inject([NgxCleverService], (service: NgxCleverService) => {
    expect(service).toBeTruthy();
  }));
});
