import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppressionAgentComponent } from './suppression-agent.component';

describe('SuppressionAgentComponent', () => {
  let component: SuppressionAgentComponent;
  let fixture: ComponentFixture<SuppressionAgentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuppressionAgentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuppressionAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
