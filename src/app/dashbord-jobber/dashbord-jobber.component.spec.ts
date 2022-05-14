import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbordJobberComponent } from './dashbord-jobber.component';

describe('DashbordJobberComponent', () => {
  let component: DashbordJobberComponent;
  let fixture: ComponentFixture<DashbordJobberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashbordJobberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashbordJobberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
