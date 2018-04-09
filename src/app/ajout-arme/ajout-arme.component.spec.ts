import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutArmeComponent } from './ajout-arme.component';

describe('AjoutArmeComponent', () => {
  let component: AjoutArmeComponent;
  let fixture: ComponentFixture<AjoutArmeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutArmeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutArmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
