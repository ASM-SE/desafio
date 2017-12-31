import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { DialogsService } from '../../shared/services/dialog/dialogs.service';


import { buttonStartLabel, buttonRestartLabel, 
         buttonInstructionsLabel, buttnScoresLabel, 
         instructionsText, logoImagePath } from '../../shared/services/shared.service';


@Component({
  selector: 'app-pre-game',
  templateUrl: './pre-game.component.html',
  styleUrls: ['./pre-game.component.css']
})
export class PreGameComponent implements OnInit {

  private buttonStartLabel : string = buttonStartLabel;
  private buttonInstructionsLabel : string = buttonInstructionsLabel;
  private buttonScoresLabel : string = buttnScoresLabel;
  private logoImage : any = logoImagePath;

  constructor(private router: Router,
              private dialogService: DialogsService) { }

  ngOnInit() { }

  public startGame() : void {
    this.router.navigate(['game']);
  }

  public showDialog() : void {
    this.dialogService.information('How to Play', instructionsText);
  }

  public showScores(): void {
    this.router.navigate(['scores'])
  }

}
