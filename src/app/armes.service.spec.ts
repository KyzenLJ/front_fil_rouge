import { TestBed, inject } from '@angular/core/testing';

import { ArmesService } from './armes.service';

describe('ArmesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArmesService]
    });
  });

  it('should be created', inject([ArmesService], (service: ArmesService) => {
    expect(service).toBeTruthy();
  }));
});
