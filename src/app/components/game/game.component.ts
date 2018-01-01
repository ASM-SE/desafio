import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DialogsService } from '../../shared/services/dialog/dialogs.service';
import { DataService } from '../../shared/services/data/data.service';
import { translations } from '../../shared/services/translations.service';
import { configurations } from '../../shared/services/configurations.service';

import { Player } from '../../schemas/player.schema';
import { Score } from '../../schemas/score.schema';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  @Input() public player : Player;
  @Input() public gameStarted : boolean = false;
  @Input() public hasQuitDialog : boolean = false;
  @Input() public winner : Player;

  public playerOne : Player;
  public playerTwo : Player; 
  public btnQuit : string = translations.buttons.quit;

  constructor(private dataService: DataService,
              private dialogService: DialogsService,
              private router: Router) {     
              }

  ngOnInit() {
      this.gameStarted = this.dataService.booleanData;
      this.resetPlayerOptions(0,0,0,0); 
  }

  private resetPlayerOptions(winsPlayerOne:number, defeatsPlayerOne:number,
                             winsPlayerTwo:number, defeatsPlayerTwo:number) : void{
      this.playerOne = {
          id: 'playerone',
          name: 'Player 1',
          hp: configurations.player.hp,
          wins: winsPlayerOne,
          defeats: defeatsPlayerOne,
          image: "./assets/images/100.png"
      }
      this.playerTwo = {
          id: 'playertwo',
          name: 'Player 2',
          hp: configurations.player.hp,
          wins: winsPlayerTwo,
          defeats: defeatsPlayerTwo,
          image:"./assets/images/100.png"
      }
  }

  private endGame(status : boolean){
      this.gameStarted = status;
      this.winner = this.setWinner();
  }

  private restartGame(status : boolean){
      this.gameStarted = status;
      this.winner = null;
      this.resetPlayerOptions(this.playerOne.wins,this.playerOne.defeats,this.playerTwo.wins,this.playerTwo.defeats);
  }

  private setWinner() : Player {
      if(this.playerOne.hp === 0){
          this.playerTwo.wins ++;
          this.playerOne.defeats ++;
          this.playerTwo.image = "./assets/images/p2win.png";
          return this.playerTwo;
      }else{
          this.playerOne.wins ++;
          this.playerTwo.defeats ++;
          this.playerOne.image = "./assets/images/p1win.png"; 
          return this.playerOne;
      }
  }

  private quitGame() : void {
      this.hasQuitDialog = true;
      var resultDialog: any,
          player : string = this.hasWins();

      if(player){
          this.dialogService.confirmInput('Save Score', 'Insert the name of ' + player + ' to save his score:','Save','Cancel')
                            .subscribe(res => {resultDialog = res;
                                localStorage.setItem('scores', JSON.stringify(this.setScore(resultDialog)));
                                this.router.navigate(['home']);
                            }); 
      }else{
        this.dialogService.confirm('Quit Game', 'Are you sure do you want quite the game?','Yes','No')
                          .subscribe(res => {resultDialog = res;
                                if(resultDialog === true){
                                    this.router.navigate(['home']);                              
                                }else{
                                    this.hasQuitDialog = false;
                                }
                          }); 
      }
  }

  private hasWins() : string {
      if(this.playerOne.wins || this.playerTwo.wins){
          return this.playerOne.wins > this.playerTwo.wins ? this.playerOne.name : this.playerTwo.name;
      }else{
          return null;
      }
  }

  private setScore(name: any[]) : any[] {
      var allScores = JSON.parse(localStorage.getItem('scores')) || [],
          player = this.playerOne.wins > this.playerTwo.wins ? this.playerOne : this.playerTwo,
          scoreName = !name['name'] ?  player.name : name['name'],
          playerScore ={
            name: scoreName,
            hp: player.hp,
            wins: player.wins,
            defeats: player.defeats
          };
      allScores.push(playerScore);
      return allScores;
  }

}
