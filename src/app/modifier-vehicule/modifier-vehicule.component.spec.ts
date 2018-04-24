import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierVehiculeComponent } from './modifier-vehicule.component';

describe('ModifierVehiculeComponent', () => {
  let component: ModifierVehiculeComponent;
  let fixture: ComponentFixture<ModifierVehiculeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierVehiculeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierVehiculeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
