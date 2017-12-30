import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DomSanitizer  } from '@angular/platform-browser';

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
    }else{
      this.event.emit(true);    
    }

  }

  private setButtonOptions(data : any) {
      //setting button text
      if(data.name){    
        this.buttonText = this.data.name;
        const classStyle = `btn btn-primary`;
        return this.sanitizer.bypassSecurityTrustStyle(classStyle);
      }else{
        this.buttonText = this.data;
        const classStyle = `btn btn-danger`;
        return this.sanitizer.bypassSecurityTrustStyle(classStyle);        
      }
  }



}
