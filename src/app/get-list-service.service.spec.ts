import { TestBed } from '@angular/core/testing';

import { GetListServiceService } from './get-list-service.service';

describe('GetListServiceService', () => {
  let service: GetListServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetListServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
