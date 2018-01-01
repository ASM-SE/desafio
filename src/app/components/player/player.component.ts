import { Component, Input } from '@angular/core';
import { translations } from '../../shared/services/translations.service';
import { Player } from '../../schemas/player.schema';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent {

  //Variável que recebe o jogador para ser apresentado na sua respectiva directiva na tela do jogo
  @Input() public player : Player;

  public btnBack : string = translations.buttons.back;

}
