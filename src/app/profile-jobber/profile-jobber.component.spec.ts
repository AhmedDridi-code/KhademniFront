import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileJobberComponent } from './profile-jobber.component';

describe('ProfileJobberComponent', () => {
  let component: ProfileJobberComponent;
  let fixture: ComponentFixture<ProfileJobberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileJobberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileJobberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
