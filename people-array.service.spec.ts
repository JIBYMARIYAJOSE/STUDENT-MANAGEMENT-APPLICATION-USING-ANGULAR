import { TestBed } from '@angular/core/testing';

import { PeopleArrayService } from './people-array.service';

describe('PeopleArrayService', () => {
  let service: PeopleArrayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeopleArrayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
