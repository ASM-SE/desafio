import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonPlayerComponent } from './button-player.component';

describe('ButtonPlayerComponent', () => {
  let component: ButtonPlayerComponent;
  let fixture: ComponentFixture<ButtonPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
