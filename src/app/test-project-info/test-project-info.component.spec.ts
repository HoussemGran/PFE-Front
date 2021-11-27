import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestProjectInfoComponent } from './test-project-info.component';

describe('TestProjectInfoComponent', () => {
  let component: TestProjectInfoComponent;
  let fixture: ComponentFixture<TestProjectInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestProjectInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestProjectInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
