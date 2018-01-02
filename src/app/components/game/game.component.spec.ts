import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { MatDialogModule, MatDialog, MatButtonModule, MatInputModule, MatFormFieldModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { DialogsService } from '../../shared/services/dialog/dialogs.service';
import { Router } from '@angular/router';
import { DataService } from '../../shared/services/data/data.service';
import { GameComponent } from './game.component';

class RouterStub {
  navigate(url: string) { return url; }
}

fdescribe('GameComponent', () => {
  let component: GameComponent;
  let fixture: ComponentFixture<GameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatDialogModule
      ],
      declarations: [ 
        GameComponent 
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA, 
        NO_ERRORS_SCHEMA
      ],
      providers: [
        DataService,
        DialogsService,
        MatDialog,        
        { provide: Router,      useClass: RouterStub }
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Deve criar o component Game - tela principal do jogo', () => {
    expect(component).toBeTruthy();
  });

  it('Devera declarar a variavel gameStarted do tipo `boolean`', () => {
    expect(typeof (component.gameStarted)).toBeTruthy('boolean');
  });
  
  it('Devera declarar a variavel hasQuitDialog do tipo `boolean`', () => {
    expect(typeof (component.hasQuitDialog)).toBeTruthy('boolean');
  });

  it('Deve verificar se a função resetPlayerOptions() foi criada', () => {
    expect(component.resetPlayerOptions).toHaveBeenCalled;
  });

  it('Deve verificar se a função endGame() foi criada', () => {
    expect(component.endGame).toHaveBeenCalled;
  });  

  it('Deve verificar se a função restartGame() foi criada', () => {
    expect(component.restartGame).toHaveBeenCalled;
  });  
  
  it('Deve verificar se a função setWinner() foi criada', () => {
    expect(component.setWinner).toHaveBeenCalled;
  });  
  
  it('Deve verificar se a função quitGame() foi criada', () => {
    expect(component.quitGame).toHaveBeenCalled;
  });  

  it('Deve verificar se a função hasWins() foi criada', () => {
    expect(component.hasWins).toHaveBeenCalled;
  });    

  it('Deve verificar se a função setScore() foi criada', () => {
    expect(component.setScore).toHaveBeenCalled;
  });   

});
