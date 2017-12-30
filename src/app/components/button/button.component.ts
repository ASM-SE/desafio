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


/*
  private getStyle(SP_status : boolean) {

    if(SP_status === true){
      const style = `font-size: 0.875em; color: #000000;`;
      return this.sanitizer.bypassSecurityTrustStyle(style);
    }else{
      const style = `font-size: 0.875em; font-weight: bold; color: #000000;`;
      return this.sanitizer.bypassSecurityTrustStyle(style);
    }

  }
  
  [style]="getStyle(text.SP_status)" 
  */



}
