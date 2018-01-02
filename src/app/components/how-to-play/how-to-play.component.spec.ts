import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { MatDialogModule, MatDialog, MatButtonModule, MatInputModule, MatFormFieldModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { DialogsService } from '../../shared/services/dialog/dialogs.service';
import { Router } from '@angular/router';
import { HowToPlayComponent } from './how-to-play.component';

describe('HowToPlayComponent', () => {
  let component: HowToPlayComponent;
  let fixture: ComponentFixture<HowToPlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatDialogModule
      ],
      declarations: [ 
        HowToPlayComponent  
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA, 
        NO_ERRORS_SCHEMA
      ],
      providers: [
        DialogsService,
        MatDialog, 
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HowToPlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Deve criar o componente how to play', () => {
    expect(component).toBeTruthy();
  });

  it('Deve declarar a variavel btnBack do tipo `string`', () => {
    expect(component.btnBack).toBeTruthy();
    expect(typeof (component.btnBack)).toBeTruthy('string');
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

 
});
