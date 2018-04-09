import { TestBed, inject } from '@angular/core/testing';

import { SuspectService } from './suspect.service';

describe('SuspectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SuspectService]
    });
  });

  it('should be created', inject([SuspectService], (service: SuspectService) => {
    expect(service).toBeTruthy();
  }));
});
