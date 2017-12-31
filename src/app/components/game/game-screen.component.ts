import { Component, OnInit, HostListener } from '@angular/core';



import { Player } from '../../schemas/player.schema';

import { hp, damage } from '../../shared/services/shared.service';

@Component({
  selector: 'app-game-screen',
  templateUrl: './game-screen.component.html',
  styleUrls: ['./game-screen.component.css']
})
export class GameScreenComponent implements OnInit {


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

  //Variables
  public restart : string = 'Restart';
  private winner : string = null;
  private showGameScreen : Boolean = false;
  private gameStart : Boolean = false;

  constructor() { }

  ngOnInit() { }

  //Listener for keybord press to make damage in the oposite player
  @HostListener('window:keypress', ['$event']) keyEvent(event: KeyboardEvent){

        if ((event.key === "s")&&(!this.winner)) {
          this.makeAction(this.playerOne);

        }else if ((event.key === "l")&&(!this.winner)) {
          this.makeAction(this.playerTwo);

        }

  }
  

  /* Button action function according to the eventdata parameter value:
                 (1) if is player data, make damage or, 
                 (2) if is restart value, restart the game or,
                 (3) if is start value, start the game.*/
  public makeAction(eventdata: any){
     
      if((eventdata != 'start')&&(eventdata != 'restart')){

            if((eventdata.id === this.playerOne.id) && (this.playerTwo.hp > 0) && (this.playerOne.hp > 0)){ 
              
                this.playerTwo.hp -= damage;
                
                if(this.playerTwo.hp === 0){
                    this.winner = this.playerOne.name + ' Win!';
                    this.showGameScreen = false;
                }

            }else if((eventdata.id === this.playerTwo.id) && (this.playerOne.hp > 0) && (this.playerTwo.hp > 0)){
              
                this.playerOne.hp -= damage;

                if(this.playerOne.hp === 0){
                    this.winner = this.playerTwo.name + ' Win!';
                    this.showGameScreen = false;              
                }
              
            }   

      }else if(eventdata === 'restart'){
        
            this.playerOne.hp = hp;
            this.playerTwo.hp = hp;
            this.winner = null;   
            this.showGameScreen = true; 
            this.gameStart = true; 



      }else if(eventdata === 'start'){

            this.showGameScreen = true;
            this.gameStart = true;

      }

 
  }


}
