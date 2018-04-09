import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifAffaireComponent } from './modif-affaire.component';

describe('ModifAffaireComponent', () => {
  let component: ModifAffaireComponent;
  let fixture: ComponentFixture<ModifAffaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifAffaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifAffaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
