import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserjobbeurComponent } from './userjobbeur.component';

describe('UserjobbeurComponent', () => {
  let component: UserjobbeurComponent;
  let fixture: ComponentFixture<UserjobbeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserjobbeurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserjobbeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
