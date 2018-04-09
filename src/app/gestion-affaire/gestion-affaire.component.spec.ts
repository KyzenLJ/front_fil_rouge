import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionAffaireComponent } from './gestion-affaire.component';

describe('GestionAffaireComponent', () => {
  let component: GestionAffaireComponent;
  let fixture: ComponentFixture<GestionAffaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionAffaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionAffaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
