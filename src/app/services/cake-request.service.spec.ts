import { TestBed } from '@angular/core/testing';

import { CakeRequestService } from './cake-request.service';

describe('CakeRequestService', () => {
  let service: CakeRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CakeRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
