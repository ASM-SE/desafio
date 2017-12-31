import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DamageButtonComponent } from './damage-button.component';

describe('DamageButtonComponent', () => {
  let component: DamageButtonComponent;
  let fixture: ComponentFixture<DamageButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DamageButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DamageButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
