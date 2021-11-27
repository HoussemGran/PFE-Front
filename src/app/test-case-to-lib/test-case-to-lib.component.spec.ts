import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCaseToLibComponent } from './test-case-to-lib.component';

describe('TestCaseToLibComponent', () => {
  let component: TestCaseToLibComponent;
  let fixture: ComponentFixture<TestCaseToLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestCaseToLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCaseToLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
