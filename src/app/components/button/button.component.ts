import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DomSanitizer  } from '@angular/platform-browser';

import { Player } from '../../schemas/player.schema';

@Component({
  selector: 'app-button-player',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() public data : any;

  @Output() public event: EventEmitter<any> = new EventEmitter();

  private buttonText : string;
  
  constructor(private sanitizer : DomSanitizer) { }

  ngOnInit() {


  }

  private action(data : any) : void{

    if(data.name){    
      this.event.emit(this.data);
    }else if(data === 'Restart'){
      this.event.emit('restart');    
    }else if(data === 'Start'){
      this.event.emit('start'); 
    }

  }

  private setButtonOptions(data : any) {
    console.log(data);
      //setting button text
      if(data.name){    
        this.buttonText = this.data.name;
        const classStyle = `btn btn-primary`;
        return this.sanitizer.bypassSecurityTrustStyle(classStyle);
      }else if(data === 'Restart'){
        this.buttonText = this.data;
        const classStyle = `btn btn-danger`;
        return this.sanitizer.bypassSecurityTrustStyle(classStyle);        
      }else  if(data === 'Start'){
        this.buttonText = this.data;
        const classStyle = `btn btn-success`;
        return this.sanitizer.bypassSecurityTrustStyle(classStyle);         
      }
  }



}
