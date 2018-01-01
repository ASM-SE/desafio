import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { Player } from '../../schemas/player.schema';
import { PlayerComponent } from './player.component';

fdescribe('PlayerComponent', () => {
  let component: PlayerComponent;
  let fixture: ComponentFixture<PlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        PlayerComponent 
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA, 
        NO_ERRORS_SCHEMA
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Devera criar o component Player a ser apresentado na tela do jogo', () => {
    expect(component).toBeTruthy();
  });

  it('Devera declarar a variavel player do tipo `Player`', () => {
    expect(typeof (component.player)).toBeTruthy();
    expect(typeof (component.player)).toBeTruthy('Player');
  });

  it('Devera declarar a variavel btnBack do tipo `string`', () => {
    expect(component.btnBack).toBeTruthy();
    expect(typeof (component.btnBack)).toBeTruthy('string');
  });


});
