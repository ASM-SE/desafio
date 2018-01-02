import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { MatDialogModule, MatDialog, MatButtonModule, MatInputModule, MatFormFieldModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { DialogsService } from '../../shared/services/dialog/dialogs.service';
import { Router } from '@angular/router';
import { Score } from '../../schemas/score.schema';
import { ScoreComponent } from './score.component';


class RouterStub {
  navigate(url: string) { return url; }
}

describe('ScoreComponent', () => {
  let component: ScoreComponent;
  let fixture: ComponentFixture<ScoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatDialogModule
      ],
      declarations: [ 
        ScoreComponent 
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA, 
        NO_ERRORS_SCHEMA
      ],
      providers: [
        DialogsService,
        MatDialog, 
        { provide: Router,      useClass: RouterStub }
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Deve criar o component ScoreComponent - tela de best scores do jogo', () => {
    expect(component).toBeTruthy();
  });

  it('Deve declarar a variavel playerScores do tipo `Score[]`', () => {
    expect(typeof (component.playerScores)).toBeTruthy('Score[]');
  });

  it('Deve verificar se a função back() foi criada', () => {
    expect(component.back).toHaveBeenCalled;
  });

  it('Deve dizer ao router para navergar para `home` quando back() for chamado/clicado',
  inject([Router], (router: Router) => { 
    const spy = spyOn(router, "navigate");
    component.back(); 
    const url = spy.calls.first().args[0];
    expect(router.navigate).toHaveBeenCalledWith(['home']);
  }));

  it('Deve verificar se a função getScores() retorna uma array de scores', () => {
    expect(component.getScores).toBeTruthy('Array<Score>');
  });

  it('Deve verificar se a função cleanScores() foi criada', () => {
    expect(component.cleanScores).toHaveBeenCalled;
  });
  

});
