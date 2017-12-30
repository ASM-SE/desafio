import { Component, OnInit, Input, EventEmitter } from '@angular/core';


import { Player } from '../../schemas/player.schema';

import { life } from '../../shared/services/shared.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {


  @Input() public playerOne : Player;

  @Input() public playerTwo : Player;


  
  public playerOneIni : Player;

  public playerTwoIni : Player;

  constructor() { 

    this.playerOneIni = this.playerOne;
    this.playerTwoIni = this.playerTwo;

  }

  ngOnInit() {

    this.playerOneIni = this.playerOne;
    this.playerTwoIni = this.playerTwo;
  }
  

  private updatePlayer(player: Player){
      if(player.id===this.playerOne.id){
        this.playerOneIni = player;
      }else{
        this.playerTwoIni = player;
      }
  }

}
