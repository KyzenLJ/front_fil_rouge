import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotlistElementComponent } from './hotlist-element.component';

describe('HotlistElementComponent', () => {
  let component: HotlistElementComponent;
  let fixture: ComponentFixture<HotlistElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotlistElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotlistElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
