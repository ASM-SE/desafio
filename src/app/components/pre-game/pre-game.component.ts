  import { Component, Input } from '@angular/core';
  import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
  import { DialogsService } from '../../shared/services/dialog/dialogs.service';
  import { DataService } from '../../shared/services/data/data.service';
  import { translations } from '../../shared/services/translations.service';
  import { configurations } from '../../shared/services/configurations.service';

  @Component({
    selector: 'app-pre-game',
    templateUrl: './pre-game.component.html',
    styleUrls: ['./pre-game.component.css']
  })
  
  export class PreGameComponent {

  private btnInstructions : string = translations.buttons.instructions;
  private btnScores : string = translations.buttons.scores;
  private imgLogo : any = configurations.layout.logo;

  constructor(private router: Router,
              private dialogService: DialogsService,
              private dataService: DataService) { }

  private goGame(value : boolean) : void {
      this.dataService.booleanData = value;
      this.router.navigate(['game']);
  }

  private showScores(): void {
      this.router.navigate(['scores']);
  }

  private showHowToPlay(): void {
      this.router.navigate(['howtoplay']);
  }



}
