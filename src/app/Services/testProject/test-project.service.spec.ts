import { TestBed } from '@angular/core/testing';

import { TestProjectService } from './test-project.service';

describe('TestProjectService', () => {
  let service: TestProjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestProjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
