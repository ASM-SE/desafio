import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DomSanitizer  } from '@angular/platform-browser';
import { translations } from '../../shared/services/translations.service';

@Component({
  selector: 'app-flow-control-button',
  templateUrl: './flow-control-button.component.html',
  styleUrls: ['./flow-control-button.component.css'],
})

  export class FlowControlButtonComponent {

  // Variável que recebe o estado do jogo
  @Input() public gameStarted : boolean;
  // Variável que recebe o vencedor
  @Input() public winner : string;
  // Variável que emite o eveno de iniciar e finalizar o jogo
  @Output() public event: EventEmitter<any> = new EventEmitter();

  public btnLabel : string;

  constructor(private sanitizer : DomSanitizer) { }

  // Função que altera o estilo do botão de acordo com o estado do jogo
  private setStyle(gameStatus : boolean, winner : string) {
      let classStyle : string;
      if((gameStatus != true)&&(!winner)){   
          this.btnLabel = translations.buttons.start;
          classStyle = `btn btn-primary`;        
      }else  if((gameStatus != false)&&(!winner)){   
          this.btnLabel = translations.buttons.restart;
          classStyle = `btn btn-danger`;
      }else{
          this.btnLabel = translations.buttons.startagain;
          classStyle = `btn btn-success`;       
      }
      return this.sanitizer.bypassSecurityTrustStyle(classStyle);     
  }

  // Função que executa o início ou o reinício do jogo de acordo com seu estado
  public action(gameStatus : boolean) : void {
      if(gameStatus != true){
          this.start();
      }else{
          this.restart();
      }
  }

  // Função que inicia o jogo
  public start() : void {
      this.event.emit(true);  
  }

  // Função que reinicia o jogo
  public restart() : void {
      this.event.emit(true);
  }

}
