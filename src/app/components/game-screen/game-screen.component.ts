import { Component, OnInit } from '@angular/core';



import { Player } from '../../schemas/player.schema';

import { life, damage } from '../../shared/services/shared.service';

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

  private winner : string = '';

  constructor() { }

  ngOnInit() {
  }

  public makeAction(eventdata: any){
     
      if(eventdata != true){

        if((eventdata.id === this.playerOne.id) && (this.playerTwo.life > 0) && (this.playerOne.life > 0)){ 
          this.playerTwo.life -= damage;
          if(this.playerTwo.life === 0){
            this.winner = this.playerOne.name + ' Win!';
          }
        }else if((eventdata.id === this.playerTwo.id) && (this.playerOne.life > 0) && (this.playerTwo.life > 0)){
          this.playerOne.life -= damage;
          if(this.playerOne.life === 0){
            this.winner = this.playerTwo.name + ' Win!';
          }
        }

      }else{
        
        this.playerOne.life = life;
        this.playerTwo.life = life;
        this.winner = '';

      }

 
  }


}
