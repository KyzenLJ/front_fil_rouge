import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuspectViewComponent } from './suspect-view.component';

describe('SuspectViewComponent', () => {
  let component: SuspectViewComponent;
  let fixture: ComponentFixture<SuspectViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuspectViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuspectViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
