import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestSpecificationComponent } from './test-specification.component';

describe('TestSpecificationComponent', () => {
  let component: TestSpecificationComponent;
  let fixture: ComponentFixture<TestSpecificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestSpecificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestSpecificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
