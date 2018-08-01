import { TestBed, inject } from '@angular/core/testing';

import { TripDataService } from './tripdata.service';

describe('TripdataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TripDataService]
    });
  });

  it('should be created', inject([TripDataService], (service: TripDataService) => {
    expect(service).toBeTruthy();
  }));
});
