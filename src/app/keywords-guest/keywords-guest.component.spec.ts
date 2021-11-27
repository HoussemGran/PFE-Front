import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeywordsGuestComponent } from './keywords-guest.component';

describe('KeywordsGuestComponent', () => {
  let component: KeywordsGuestComponent;
  let fixture: ComponentFixture<KeywordsGuestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeywordsGuestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KeywordsGuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
