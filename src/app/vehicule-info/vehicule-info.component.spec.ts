import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculeInfoComponent } from './vehicule-info.component';

describe('VehiculeInfoComponent', () => {
  let component: VehiculeInfoComponent;
  let fixture: ComponentFixture<VehiculeInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehiculeInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiculeInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
