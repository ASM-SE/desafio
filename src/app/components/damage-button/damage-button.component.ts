import { Component, OnInit, Input, Output, EventEmitter, HostListener} from '@angular/core';
import { translations } from '../../shared/services/translations.service';
import { configurations } from '../../shared/services/configurations.service';

import { Player } from '../../schemas/player.schema';

@Component({
  selector: 'app-damage-button',
  templateUrl: './damage-button.component.html',
  styleUrls: ['./damage-button.component.css']
})
export class DamageButtonComponent {

  @Input() public player : Player;
  @Input() public gameStarted : boolean;
  @Input() public hasQuitDialog : boolean;
  @Output() public event: EventEmitter<any> = new EventEmitter();

  private btnLabel : string = translations.buttons.playeraction;

  @HostListener('window:keypress', ['$event']) keyEvent(event: KeyboardEvent){
        if(this.hasQuitDialog === false){
            if ((event.key === "s")&&(this.player.id === 'playertwo')) {
                    this.damage(this.player);
            }else if ((event.key === "l")&&(this.player.id === 'playerone')) {
                    this.damage(this.player);
            }
        }
  }

  public damage(player: Player) : void { //remover o parâmetro
        if(this.gameStarted!=false){
            this.player.hp -= configurations.player.damage;
            this.player.image = "./assets/images/"+this.player.hp+".png";   
            if(this.player.hp === 0){
                this.gameStarted = false;
                this.event.emit(this.gameStarted);
            }
        }
  }

}
