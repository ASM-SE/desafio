import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DomSanitizer  } from '@angular/platform-browser';

import { buttonStartLabel, buttonRestartLabel, buttonStartAgainLabel } from '../../shared/services/shared.service';

@Component({
  selector: 'app-flow-control-button',
  templateUrl: './flow-control-button.component.html',
  styleUrls: ['./flow-control-button.component.css']
})

  export class FlowControlButtonComponent implements OnInit {


  @Input() public status : boolean;

  @Input() public winner : string;

  @Output() public event: EventEmitter<any> = new EventEmitter();

  private buttonLabel : string;

  constructor(private sanitizer : DomSanitizer) { }

  ngOnInit() { }

  //setting button label and style
  private setStyle(gameStatus : boolean, winner : string) {
      console.log(winner);
    let classStyle : string;
    if((gameStatus != true)&&(!winner)){   
        this.buttonLabel = buttonStartLabel;
        classStyle = `btn btn-primary`;        
    }else  if((gameStatus != false)&&(!winner)){   
        this.buttonLabel = buttonRestartLabel;
        classStyle = `btn btn-danger`;
    }else{
        this.buttonLabel = buttonStartAgainLabel;
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
