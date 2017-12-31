import { Component, OnInit, Input, Output, EventEmitter, HostListener} from '@angular/core';

import { Player } from '../../schemas/player.schema';
import { damage, buttonPlayerLabel } from '../../shared/services/shared.service';

@Component({
  selector: 'app-damage-button',
  templateUrl: './damage-button.component.html',
  styleUrls: ['./damage-button.component.css']
})
export class DamageButtonComponent implements OnInit {

  @Input() public player : Player;

  @Input() public status : boolean;

  @Output() public event: EventEmitter<any> = new EventEmitter();

  private buttonLabel : string = buttonPlayerLabel;

  constructor() { }

  ngOnInit() {  }


  //Listener for keybord press to make damage in the oposite player
  @HostListener('window:keypress', ['$event']) keyEvent(event: KeyboardEvent){
      if ((event.key === "s")&&(this.player.id === 'playertwo')) {
          this.damage(this.player);
      }else if ((event.key === "l")&&(this.player.id === 'playerone')) {
          this.damage(this.player);
      }
  }

  public damage(player: Player) : void { //remover o parâmetro
      if(this.status!=false){
          this.player.hp -= damage;
          this.player.image = "./assets/images/"+this.player.hp+".png";   
           
          if(this.player.hp === 0){
              this.status = false;
              this.event.emit(this.status);
          }
      }
  }



}
