import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecuteTestCaseComponent } from './execute-test-case.component';

describe('ExecuteTestCaseComponent', () => {
  let component: ExecuteTestCaseComponent;
  let fixture: ComponentFixture<ExecuteTestCaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExecuteTestCaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExecuteTestCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
