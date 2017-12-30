import { Component, OnInit } from '@angular/core';


import { Player } from '../../schemas/player.schema';

import { life } from '../../shared/services/shared.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  public playerOne : Player = {
    id: 'playerone',
    name: 'Player 1',
    life: life,
    wins: 0,
    defeats: 0
  }

  public playerTwo : Player = {
    id: 'playertwo',
    name: 'Player 2',
    life: life,
    wins: 0,
    defeats: 0    
  }

  constructor() { }

  ngOnInit() {


  }

}
