import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCasesGuestComponent } from './test-cases-guest.component';

describe('TestCasesGuestComponent', () => {
  let component: TestCasesGuestComponent;
  let fixture: ComponentFixture<TestCasesGuestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestCasesGuestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCasesGuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
