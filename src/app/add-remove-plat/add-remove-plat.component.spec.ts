import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRemovePlatComponent } from './add-remove-plat.component';

describe('AddRemovePlatComponent', () => {
  let component: AddRemovePlatComponent;
  let fixture: ComponentFixture<AddRemovePlatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRemovePlatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRemovePlatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
