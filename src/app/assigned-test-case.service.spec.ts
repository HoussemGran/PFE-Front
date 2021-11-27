import { TestBed } from '@angular/core/testing';

import { AssignedTestCaseService } from './assigned-test-case.service';

describe('AssignedTestCaseService', () => {
  let service: AssignedTestCaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssignedTestCaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
