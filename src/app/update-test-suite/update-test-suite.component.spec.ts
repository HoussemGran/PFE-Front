import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTestSuiteComponent } from './update-test-suite.component';

describe('UpdateTestSuiteComponent', () => {
  let component: UpdateTestSuiteComponent;
  let fixture: ComponentFixture<UpdateTestSuiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateTestSuiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTestSuiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
