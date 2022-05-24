import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbordMissionsComponent } from './dashbord-missions.component';

describe('DashbordMissionsComponent', () => {
  let component: DashbordMissionsComponent;
  let fixture: ComponentFixture<DashbordMissionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashbordMissionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashbordMissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
