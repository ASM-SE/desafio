import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { DataService } from '../../shared/services/data/data.service';
import { PreGameComponent } from './pre-game.component';

class RouterStub {
  navigate(url: string) { return url; }
}

describe('PreGameComponent', () => {
  let component: PreGameComponent;
  let fixture: ComponentFixture<PreGameComponent>;
 
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [ 
        PreGameComponent 
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA, 
        NO_ERRORS_SCHEMA
      ],
      providers: [
        DataService,
        { provide: Router,      useClass: RouterStub }
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreGameComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('Devera criar o component PreGameComponent - tela inicial do jogo', () => {
    expect(component).toBeTruthy();
  });

  it('Devera declarar a variavel gameStarted do tipo `boolean`', () => {
    expect(typeof (component.gameStarted)).toBeTruthy('boolean');
  });

  it('Devera declarar a variavel btnInstructions do tipo `string`', () => {
    expect(component.btnInstructions).toBeTruthy();
    expect(typeof (component.btnInstructions)).toBeTruthy('string');
  });

  it('Devera declarar a variavel btnScores do tipo `string`', () => {
    expect(component.btnInstructions).toBeTruthy();
    expect(typeof (component.btnInstructions)).toBeTruthy('string');
  });

  it('Devera declarar a variavel imgLogo do tipo `string`', () => {
    expect(component.btnInstructions).toBeTruthy();
    expect(typeof (component.btnInstructions)).toBeTruthy('string');
  });
  
  it('Devera verificar se a função goGame foi criada', () => {
    expect(component.goGame).toHaveBeenCalled;
  });

  it('Devera verificar se a função showScores foi criada', () => {
    expect(component.showScores).toHaveBeenCalled;
  });

  it('Devera verificar se a função showHowToPlay foi criada', () => {
    expect(component.showHowToPlay).toHaveBeenCalled;
  });

  it('Devera dizer ao router para navergar para `game` quando goGame() for chamado/clicado',
  inject([Router], (router: Router) => { 
    const spy = spyOn(router, "navigate");
    component.goGame(true); 
    const url = spy.calls.first().args[0];
    expect(router.navigate).toHaveBeenCalledWith(['game']);
  }));

  it('Devera dizer ao router para navergar para `scores` quando showScores() for chamado/clicado',
  inject([Router], (router: Router) => { 
    const spy = spyOn(router, "navigate");
    component.showScores(); 
    const url = spy.calls.first().args[0];
    expect(router.navigate).toHaveBeenCalledWith(['scores']);
  }));

  it('Devera dizer ao router para navergar para `scores` quando showScores() for chamado/clicado',
  inject([Router], (router: Router) => { 
    const spy = spyOn(router, "navigate");
    component.showHowToPlay(); 
    const url = spy.calls.first().args[0];
    expect(router.navigate).toHaveBeenCalledWith(['howtoplay']);
  }));


});
