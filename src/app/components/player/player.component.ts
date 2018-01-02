import { Component, Input, OnInit } from '@angular/core';
import { Player } from '../../schemas/player.schema';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  //Variável que recebe o jogador para ser apresentado na sua respectiva directiva na tela do jogo
  @Input() public player : Player;

  constructor() {}
  
  ngOnInit() {}

}
