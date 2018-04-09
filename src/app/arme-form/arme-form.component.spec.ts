import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmeFormComponent } from './arme-form.component';

describe('ArmeFormComponent', () => {
  let component: ArmeFormComponent;
  let fixture: ComponentFixture<ArmeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArmeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArmeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
