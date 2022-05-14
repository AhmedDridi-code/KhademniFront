import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sinscrire2Component } from './sinscrire2.component';

describe('Sinscrire2Component', () => {
  let component: Sinscrire2Component;
  let fixture: ComponentFixture<Sinscrire2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sinscrire2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Sinscrire2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
