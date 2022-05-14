import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sinscrire1Component } from './sinscrire1.component';

describe('Sinscrire1Component', () => {
  let component: Sinscrire1Component;
  let fixture: ComponentFixture<Sinscrire1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sinscrire1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Sinscrire1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
