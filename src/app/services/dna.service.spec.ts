import { TestBed, inject } from '@angular/core/testing';

import { DnaService } from './dna.service';

describe('DnaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DnaService]
    });
  });

  it('should be created', inject([DnaService], (service: DnaService) => {
    expect(service).toBeTruthy();
  }));
});
