import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeArmesComponent } from './liste-armes.component';

describe('ListeArmesComponent', () => {
  let component: ListeArmesComponent;
  let fixture: ComponentFixture<ListeArmesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeArmesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeArmesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
