import { Component, OnInit, Input } from '@angular/core';

import { DataService } from '../../shared/services/data/data.service';

import { Player } from '../../schemas/player.schema';
import { hp, buttonQuitLabel } from '../../shared/services/shared.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  @Input() public player : Player;

  @Input() public gameStatus : boolean = false;
  
  @Input() public winner : string;

  public playerOne : Player;
  public playerTwo : Player; 
  public buttonQuit : string = buttonQuitLabel;

  constructor(private dataService: DataService) {     
              this.resetPlayerOptions(0,0,0,0); }

  ngOnInit() {
    this.gameStatus = this.dataService.booleanData;
    //this.resetPlayerOptions(0,0,0,0);
  }

  private resetPlayerOptions(winsPlayerOne:number, defeatsPlayerOne:number,
                             winsPlayerTwo:number, defeatsPlayerTwo:number) : void{
      this.playerOne = {
        id: 'playerone',
        name: 'Player 1',
        hp: hp,
        wins: winsPlayerOne,
        defeats: defeatsPlayerOne,
        image: "./assets/images/100.png"
      }
      this.playerTwo = {
        id: 'playertwo',
        name: 'Player 2',
        hp: hp,
        wins: winsPlayerTwo,
        defeats: defeatsPlayerTwo,
        image:"./assets/images/100.png"
      }
    
  }

  private endGame(status : boolean){
    this.gameStatus = status;
    this.winner = this.setWinner();
  }

  private restartGame(status : boolean){
      this.gameStatus = status;
      this.winner = '';
      this.resetPlayerOptions(this.playerOne.wins,this.playerOne.defeats,this.playerTwo.wins,this.playerTwo.defeats);
  }

  private setWinner() : string{
    if(this.playerOne.hp === 0){
        this.playerTwo.wins ++;
        this.playerOne.defeats ++;
        this.playerTwo.image = "./assets/images/p2win.png";
      return this.playerTwo.name;
    }else{
        this.playerOne.wins ++;
        this.playerTwo.defeats ++;
        this.playerOne.image = "./assets/images/p1win.png"; 
      return this.playerOne.name;
    }
  }


}
