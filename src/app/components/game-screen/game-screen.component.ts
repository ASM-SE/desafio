import { Component, OnInit } from '@angular/core';



import { Player } from '../../schemas/player.schema';

import { life } from '../../shared/services/shared.service';

@Component({
  selector: 'app-game-screen',
  templateUrl: './game-screen.component.html',
  styleUrls: ['./game-screen.component.css']
})
export class GameScreenComponent implements OnInit {

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

  public restart : string = 'Restart';

  constructor() { }

  ngOnInit() {
  }

  public makeAction(eventdata: any){
      console.log(eventdata);
  }


}
