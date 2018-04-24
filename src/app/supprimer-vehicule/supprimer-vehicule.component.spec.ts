import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupprimerVehiculeComponent } from './supprimer-vehicule.component';

describe('SupprimerVehiculeComponent', () => {
  let component: SupprimerVehiculeComponent;
  let fixture: ComponentFixture<SupprimerVehiculeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupprimerVehiculeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupprimerVehiculeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
