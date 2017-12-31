import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { DialogsService } from '../../shared/services/dialog/dialogs.service';

import { Score } from '../../schemas/score.schema';

import { buttonStartLabel, buttonRestartLabel, 
         buttonInstructionsLabel, buttnScoresLabel, 
         instructionsText, logoImagePath } from '../../shared/services/shared.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {



  @Input() public playerScore : Array<Score> = [{

      name: 'fulano',
      hp: 20,
      wins: 3,
      defeats: 4,

  },{

    name: 'fulano',
    hp: 20,
    wins: 3,
    defeats: 4,

},{

  name: 'fulano',
  hp: 20,
  wins: 3,
  defeats: 4,

}];

  public playerScores : Array<Score>;

  constructor(private router: Router,
              private dialogService: DialogsService) { }

  ngOnInit() {
      this.playerScores = this.getScores();  
  }

  public back() : void {
      this.router.navigate(['home']);
  }

  private setScore() : void {
      localStorage.setItem('scores', JSON.stringify(this.playerScore));
      this.playerScores = this.getScores();
  }

  private getScores() : Array<Score> {
      return JSON.parse(localStorage.getItem('scores'));    
  }

  private cleanScores() : void {
      var result: Boolean = false;
      this.dialogService.confirm('Clean Scores', 'Are you sure do you want clean the score?','Yes','No')
                        .subscribe(res => {result = res;
                            if(result === true){
                                localStorage.removeItem('scores');
                                this.playerScores = this.getScores();
                            }
      }); 
  }


}


