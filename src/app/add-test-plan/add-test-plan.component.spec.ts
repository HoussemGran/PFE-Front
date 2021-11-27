import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTestPlanComponent } from './add-test-plan.component';

describe('AddTestPlanComponent', () => {
  let component: AddTestPlanComponent;
  let fixture: ComponentFixture<AddTestPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTestPlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTestPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
