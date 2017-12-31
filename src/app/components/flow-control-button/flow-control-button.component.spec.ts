import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowControlButtonComponent } from './flow-control-button.component';

describe('FlowControlButtonComponent', () => {
  let component: FlowControlButtonComponent;
  let fixture: ComponentFixture<FlowControlButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlowControlButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlowControlButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
