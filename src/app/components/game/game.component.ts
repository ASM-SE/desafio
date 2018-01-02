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

  // Declara variáveis visíveis aos demais componentes
  // Variável que recebe os jogadores  
  @Input() public player : Player;
  // Variável que indica se o jogo iniciou ou terminou
  @Input() public gameStarted : boolean = false;
  // Variável que bloqueia as teclas de dano ("S" e "L") quando um diálogo está sendo exibido
  @Input() public hasQuitDialog : boolean = false;
  // Variável que recebe o vencedor
  @Input() public winner : Player;

  // Variável do jogador um
  public playerOne : Player;
  // Variável do jogador dois
  public playerTwo : Player; 
  public btnQuit : string = translations.buttons.quit;

  constructor(private dataService: DataService,
              private dialogService: DialogsService,
              private router: Router) {     
              }

  ngOnInit() {
      // Atribui o valor estado do jogo enviado pela tela inicial
      this.gameStarted = this.dataService.booleanData;
      // Inicializa os jogadores e suas vitórias e derrotas (2 parâmetros para cada jogador)
      this.resetPlayerOptions(0,0,0,0); 
  }

  // Função que inicializa e reinicia os dados dos jogadores
  public resetPlayerOptions(winsPlayerOne:number, defeatsPlayerOne:number,
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

  // Função que encerra o jogo
  public endGame(status : boolean){
      this.gameStarted = status;
      this.winner = this.setWinner();
  }

  // Função que reinicia o jogo
  public restartGame(status : boolean){
      this.gameStarted = status;
      this.winner = null;
      this.resetPlayerOptions(this.playerOne.wins,this.playerOne.defeats,this.playerTwo.wins,this.playerTwo.defeats);
  }

  // Função que indica o vencedor e a mensagem de vitória em tela
  public setWinner() : Player {
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

  // Função para sair do jogo que apresenta diálogo para confirmar saída, se jogo em curso ou se o score deve ser salvo
  public quitGame() : void {
      this.hasQuitDialog = true;
      var resultDialog: any,
          player : string = this.hasWins();

      // Apresenta diálogo de acordo com o estado do jogo - com ou sem vencedor
      if(player){
          // Diálogo que solicita nome do vencedor com maior número de vitórias para ser salvo em score no localStorage
          this.dialogService.confirmInput('Save Score', 'Insert the name of ' + player + ' to save his score:','Save','Cancel')
                            .subscribe(res => {resultDialog = res;
                                localStorage.setItem('scores', JSON.stringify(this.setScore(resultDialog)));
                                this.router.navigate(['home']);
                            }); 
      }else{
        // Diálogo que questiona saída do jogo, caso o mesmo não exista nenhuma jogador com vitórias
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

  // Função que verifica se há vencedor
  public hasWins() : string {
      if(this.playerOne.wins || this.playerTwo.wins){
          return this.playerOne.wins > this.playerTwo.wins ? this.playerOne.name : this.playerTwo.name;
      }else{
          return null;
      }
  }

  // Função que busca e retorna as scores anteriores com a nova score 
  public setScore(name: any[]) : any[] {
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
