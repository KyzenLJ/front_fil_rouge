import { TestBed, inject } from '@angular/core/testing';

import { VehiculesService } from './vehicule.service';

describe('VehiculesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VehiculesService]
    });
  });

  it('should be created', inject([VehiculesService], (service: VehiculesService) => {
    expect(service).toBeTruthy();
  }));
});
