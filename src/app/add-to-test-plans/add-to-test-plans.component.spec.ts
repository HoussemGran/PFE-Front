import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToTestPlansComponent } from './add-to-test-plans.component';

describe('AddToTestPlansComponent', () => {
  let component: AddToTestPlansComponent;
  let fixture: ComponentFixture<AddToTestPlansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddToTestPlansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddToTestPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
