import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordeonRechercheComponent } from './accordeon-recherche.component';

describe('AccordeonRechercheComponent', () => {
  let component: AccordeonRechercheComponent;
  let fixture: ComponentFixture<AccordeonRechercheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccordeonRechercheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordeonRechercheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
