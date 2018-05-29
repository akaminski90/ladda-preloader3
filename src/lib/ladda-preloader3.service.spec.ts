import { TestBed, inject } from '@angular/core/testing';

import { LaddaPreloader3Service } from './ladda-preloader3.service';

describe('LaddaPreloader3Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LaddaPreloader3Service]
    });
  });

  it('should be created', inject([LaddaPreloader3Service], (service: LaddaPreloader3Service) => {
    expect(service).toBeTruthy();
  }));
});
