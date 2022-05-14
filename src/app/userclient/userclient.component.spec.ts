import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserclientComponent } from './userclient.component';

describe('UserclientComponent', () => {
  let component: UserclientComponent;
  let fixture: ComponentFixture<UserclientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserclientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
