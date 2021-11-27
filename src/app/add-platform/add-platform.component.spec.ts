import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPlatformComponent } from './add-platform.component';

describe('AddPlatformComponent', () => {
  let component: AddPlatformComponent;
  let fixture: ComponentFixture<AddPlatformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPlatformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPlatformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
