import { TestBed } from '@angular/core/testing';

import { EvidenceIconService } from './evidence-icon.service';

describe('EvidenceIconService', () => {
  let service: EvidenceIconService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EvidenceIconService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
