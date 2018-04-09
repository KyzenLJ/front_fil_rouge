import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuspectFormComponent } from './suspect-form.component';

describe('SuspectFormComponent', () => {
  let component: SuspectFormComponent;
  let fixture: ComponentFixture<SuspectFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuspectFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuspectFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
