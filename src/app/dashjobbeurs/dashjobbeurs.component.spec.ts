import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashjobbeursComponent } from './dashjobbeurs.component';

describe('DashjobbeursComponent', () => {
  let component: DashjobbeursComponent;
  let fixture: ComponentFixture<DashjobbeursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashjobbeursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashjobbeursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
