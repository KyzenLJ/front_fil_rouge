import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutAffaireComponent } from './ajout-affaire.component';

describe('AjoutAffaireComponent', () => {
  let component: AjoutAffaireComponent;
  let fixture: ComponentFixture<AjoutAffaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutAffaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutAffaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
