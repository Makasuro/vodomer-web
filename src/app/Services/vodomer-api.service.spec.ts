import { TestBed } from '@angular/core/testing';

import { VodomerApiService } from './vodomer-api.service';

describe('VodomerApiService', () => {
  let service: VodomerApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VodomerApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
