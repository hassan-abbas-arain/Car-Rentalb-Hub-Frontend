import { TestBed } from '@angular/core/testing';

import { PartnerSharedServiceService } from './partner-shared-service.service';

describe('PartnerSharedServiceService', () => {
  let service: PartnerSharedServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PartnerSharedServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
