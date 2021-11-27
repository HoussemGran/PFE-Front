import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTestProjectComponent } from './update-test-project.component';

describe('UpdateTestProjectComponent', () => {
  let component: UpdateTestProjectComponent;
  let fixture: ComponentFixture<UpdateTestProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateTestProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTestProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
