import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffaireFormComponent } from './affaire-form.component';

describe('AffaireFormComponent', () => {
  let component: AffaireFormComponent;
  let fixture: ComponentFixture<AffaireFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffaireFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffaireFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
