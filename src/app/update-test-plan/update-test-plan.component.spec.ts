import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTestPlanComponent } from './update-test-plan.component';

describe('UpdateTestPlanComponent', () => {
  let component: UpdateTestPlanComponent;
  let fixture: ComponentFixture<UpdateTestPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateTestPlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTestPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
