import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTestProjectComponent } from './add-test-project.component';

describe('AddTestProjectComponent', () => {
  let component: AddTestProjectComponent;
  let fixture: ComponentFixture<AddTestProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTestProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTestProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
