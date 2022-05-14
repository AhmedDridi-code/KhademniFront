import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatistiqueclientComponent } from './statistiqueclient.component';

describe('StatistiqueclientComponent', () => {
  let component: StatistiqueclientComponent;
  let fixture: ComponentFixture<StatistiqueclientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatistiqueclientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatistiqueclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
