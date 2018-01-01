import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DomSanitizer  } from '@angular/platform-browser';
import { translations } from '../../shared/services/translations.service';

@Component({
  selector: 'app-flow-control-button',
  templateUrl: './flow-control-button.component.html',
  styleUrls: ['./flow-control-button.component.css']
})

  export class FlowControlButtonComponent {

  @Input() public gameStarted : boolean;
  @Input() public winner : string;
  @Output() public event: EventEmitter<any> = new EventEmitter();

  private btnLabel : string;

  constructor(private sanitizer : DomSanitizer) { }

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

  public action(status : boolean) : void {
      if(status != true){
          this.start();
      }else{
          this.restart();
      }
  }

  public start() : void {
      this.event.emit(true);  
  }

  public restart() : void {
      this.event.emit(true);
  }

}
