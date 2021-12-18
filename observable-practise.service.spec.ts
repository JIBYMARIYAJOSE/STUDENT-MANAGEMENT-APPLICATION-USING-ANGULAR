import { TestBed } from '@angular/core/testing';

import { ObservablePractiseService } from './observable-practise.service';

describe('ObservablePractiseService', () => {
  let service: ObservablePractiseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObservablePractiseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
