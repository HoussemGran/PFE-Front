import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCaseDialogComponent } from './test-case-dialog.component';

describe('TestCaseDialogComponent', () => {
  let component: TestCaseDialogComponent;
  let fixture: ComponentFixture<TestCaseDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestCaseDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCaseDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
