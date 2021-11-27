import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCasesLibComponent } from './test-cases-lib.component';

describe('TestCasesLibComponent', () => {
  let component: TestCasesLibComponent;
  let fixture: ComponentFixture<TestCasesLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestCasesLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCasesLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
