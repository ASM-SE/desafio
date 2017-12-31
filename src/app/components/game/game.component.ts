import { Component, OnInit, Input } from '@angular/core';

import { Player } from '../../schemas/player.schema';
import { hp } from '../../shared/services/shared.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  @Input() public player : Player;

  //Setting players data
  public playerOne : Player = {
    id: 'playerone',
    name: 'Player 1',
    hp: hp,
    wins: 0,
    defeats: 0
  }

  public playerTwo : Player = {
    id: 'playertwo',
    name: 'Player 2',
    hp: hp,
    wins: 0,
    defeats: 0    
  }

  constructor() { }

  ngOnInit() {
  }

  public finishGame(player : Player){

    console.log(player);
  
  }


}
