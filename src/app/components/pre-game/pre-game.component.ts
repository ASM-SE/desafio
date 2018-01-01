  import { Component, Input, OnInit } from '@angular/core';
  import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
  import { DataService } from '../../shared/services/data/data.service';
  import { translations } from '../../shared/services/translations.service';
  import { configurations } from '../../shared/services/configurations.service';

  @Component({
    selector: 'app-pre-game',
    templateUrl: './pre-game.component.html',
    styleUrls: ['./pre-game.component.css']
  })
  
  export class PreGameComponent implements OnInit {

  // Variável que indica início/fim do jogo
  @Input() public gameStarted : boolean;

  // Variáveis dos botões da tela
  public btnInstructions : string = translations.buttons.instructions;
  public btnScores : string = translations.buttons.scores;
  public imgLogo : string = configurations.layout.logo;

  constructor(private router: Router,
              private dataService: DataService) { }

  ngOnInit(){ }
  
  /** Função que navega para início do jogo (Componente game)
   * Envia o gameStarted pelo dataService próximo componente */
  public goGame(value : boolean) : void {
      this.dataService.booleanData = value;
      this.router.navigate(['game']);
  }

  // Função que navega para scores do jogo (Componente score)
  public showScores(): void {
      this.router.navigate(['scores']);
  }

  // Função que navega para as instruções do jogo (Componente how-to-play)
  public showHowToPlay(): void {
      this.router.navigate(['howtoplay']);
  }



}
