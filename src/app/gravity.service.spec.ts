import { TestBed, inject } from '@angular/core/testing';

import { GravityService } from './gravity.service';

describe('GravityService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GravityService]
    });
  });

  it('should be created', inject([GravityService], (service: GravityService) => {
    expect(service).toBeTruthy();
  }));
});
