  import { Component, OnInit, Input } from '@angular/core';
  import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
  import { DialogsService } from '../../shared/services/dialog/dialogs.service';
  import { DataService } from '../../shared/services/data/data.service';

  import { buttonStartLabel, buttonRestartLabel, 
          buttonInstructionsLabel, buttonScoresLabel, logoImagePath } from '../../shared/services/shared.service';


  @Component({
    selector: 'app-pre-game',
    templateUrl: './pre-game.component.html',
    styleUrls: ['./pre-game.component.css']
  })
  
  export class PreGameComponent implements OnInit {

  private buttonStartLabel : string = buttonStartLabel;
  private buttonInstructionsLabel : string = buttonInstructionsLabel;
  private buttonScoresLabel : string = buttonScoresLabel;
  private logoImage : any = logoImagePath;

  constructor(private router: Router,
              private dialogService: DialogsService,
              private dataService: DataService) { }

  ngOnInit() { }

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
