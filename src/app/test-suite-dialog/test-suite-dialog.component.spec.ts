import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestSuiteDialogComponent } from './test-suite-dialog.component';

describe('TestSuiteDialogComponent', () => {
  let component: TestSuiteDialogComponent;
  let fixture: ComponentFixture<TestSuiteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestSuiteDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestSuiteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
