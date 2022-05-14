import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfiljobbeurComponent } from './profiljobbeur.component';

describe('ProfiljobbeurComponent', () => {
  let component: ProfiljobbeurComponent;
  let fixture: ComponentFixture<ProfiljobbeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfiljobbeurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfiljobbeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
