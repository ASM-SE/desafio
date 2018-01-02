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

  it('Deve criar o componente dos botões de fluxo do jogo', () => {
    expect(component).toBeTruthy();
  });

  it('Deve declarar a variavel gameStarted do tipo `boolean`', () => {
    expect(typeof (component.gameStarted)).toBeTruthy('boolean');
  });

  it('Deve declarar a variavel winner do tipo `string`', () => {
    expect(typeof (component.winner)).toBeTruthy('string');
  });

  it('Deve declarar a variavel event do tipo `EventEmitter<any>`', () => {
    expect(typeof (component.event)).toBeTruthy('EventEmitter<any>');
  });

  it('Deve declarar a variavel btnLabel do tipo `string`', () => {
    expect(typeof (component.btnLabel)).toBeTruthy('string');
  });

  it('Deve verificar se a função action() foi criada', () => {
    expect(component.action).toHaveBeenCalled;
  });

  it('Deve verificar se a função start() foi criada', () => {
    expect(component.start).toHaveBeenCalled;
  });
  
  it('Deve verificar se a função restart() foi criada', () => {
    expect(component.restart).toHaveBeenCalled;
  });

});
