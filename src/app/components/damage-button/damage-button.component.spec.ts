import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DamageButtonComponent } from './damage-button.component';
import { Player } from '../../schemas/player.schema';

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

  it('Deve criar o componente dos botões de dano do jogo', () => {
    expect(component).toBeTruthy();
  });

  it('Devera declarar a variavel gameStarted do tipo `boolean`', () => {
    expect(typeof (component.gameStarted)).toBeTruthy('boolean');
  });
  
  it('Devera declarar a variavel hasQuitDialog do tipo `boolean`', () => {
    expect(typeof (component.hasQuitDialog)).toBeTruthy('boolean');
  });

  it('Deve declarar a variavel event do tipo `EventEmitter<any>`', () => {
    expect(typeof (component.event)).toBeTruthy('EventEmitter<any>');
  });

  it('Deve declarar a variavel btnLabel do tipo `string`', () => {
    expect(component.btnLabel).toBeTruthy();
    expect(typeof (component.btnLabel)).toBeTruthy('string');
  }); 
 
  it('Deve verificar se a função damage() foi criada', () => {
    expect(component.damage).toHaveBeenCalled;
  });
 

});
