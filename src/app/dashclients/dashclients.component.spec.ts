import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashclientsComponent } from './dashclients.component';

describe('DashclientsComponent', () => {
  let component: DashclientsComponent;
  let fixture: ComponentFixture<DashclientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashclientsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashclientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
