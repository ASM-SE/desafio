import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DomSanitizer  } from '@angular/platform-browser';

import { buttonStartLabel, buttonRestartLabel } from '../../shared/services/shared.service';


@Component({
  selector: 'app-flow-control-button',
  templateUrl: './flow-control-button.component.html',
  styleUrls: ['./flow-control-button.component.css']
})
export class FlowControlButtonComponent implements OnInit {


  @Input() public gameStatus : Boolean;

  @Output() public event: EventEmitter<any> = new EventEmitter();

  private buttonLabel : string;

  constructor(private sanitizer : DomSanitizer) { }

  ngOnInit() { }

  //setting button label and style
  private setStyle(gameStatus : Boolean) {
      let classStyle : string;
      if(gameStatus != true){   
          this.buttonLabel = buttonStartLabel;
          classStyle = `btn btn-success`;        
      }else{   
          this.buttonLabel = buttonRestartLabel;
          classStyle = `btn btn-danger`;
      }
      return this.sanitizer.bypassSecurityTrustStyle(classStyle);     
  }


  public restart() : void {
    this.event.emit(true);
  }


}
