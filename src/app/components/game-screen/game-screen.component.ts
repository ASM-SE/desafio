import { Component, OnInit, HostListener } from '@angular/core';



import { Player } from '../../schemas/player.schema';

import { life, damage } from '../../shared/services/shared.service';

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
                 (2) if is true value restart the game.*/
  public makeAction(eventdata: any){
     
      if((eventdata != 'start')&&(eventdata != 'restart')){

        if((eventdata.id === this.playerOne.id) && (this.playerTwo.life > 0) && (this.playerOne.life > 0)){ 
          
          this.playerTwo.life -= damage;
          
          if(this.playerTwo.life === 0){
              this.winner = this.playerOne.name + ' Win!';
              this.showGameScreen = false;
          }

        }else if((eventdata.id === this.playerTwo.id) && (this.playerOne.life > 0) && (this.playerTwo.life > 0)){
          
          this.playerOne.life -= damage;

          if(this.playerOne.life === 0){
              this.winner = this.playerTwo.name + ' Win!';
              this.showGameScreen = false;              
          }
          
        }

      }else if(eventdata === 'restart'){
        

        if(this.winner != null){
          this.playerOne.life = life;
          this.playerTwo.life = life;
          this.winner = null;   
          this.showGameScreen = true; 
          this.gameStart = true; 
        }else{
          this.playerOne.life = life;
          this.playerTwo.life = life;
          this.winner = null;   
          this.showGameScreen = true; 
          this.gameStart = true; 
        }   


      }else if(eventdata === 'start'){

        this.showGameScreen = true;
        this.gameStart = true;

      }

 
  }


}
