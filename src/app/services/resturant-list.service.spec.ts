import { TestBed, inject } from '@angular/core/testing';

import { ResturantListService } from './resturant-list.service';

describe('ResturantListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResturantListService]
    });
  });

  it('should be created', inject([ResturantListService], (service: ResturantListService) => {
    expect(service).toBeTruthy();
  }));
});
