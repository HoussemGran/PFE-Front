import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePlatformComponent } from './update-platform.component';

describe('UpdatePlatformComponent', () => {
  let component: UpdatePlatformComponent;
  let fixture: ComponentFixture<UpdatePlatformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePlatformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePlatformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
