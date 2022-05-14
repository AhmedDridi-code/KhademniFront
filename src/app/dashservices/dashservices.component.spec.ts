import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashservicesComponent } from './dashservices.component';

describe('DashservicesComponent', () => {
  let component: DashservicesComponent;
  let fixture: ComponentFixture<DashservicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashservicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
