import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DialogsService } from '../../shared/services/dialog/dialogs.service';

import { Score } from '../../schemas/score.schema';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {

  public playerScores : Score[];

  constructor(private router: Router,
              private dialogService: DialogsService) { }

  ngOnInit() {
      this.playerScores = this.getScores();  
  }

  // Função que navega para a página inicial
  public back() : void {
      this.router.navigate(['home']);
  }

  // Função que popula as scores salvas no localStorage
  public getScores() : Array<Score> {
      return JSON.parse(localStorage.getItem('scores'));    
  }

  // Função que excluí todas as scores do localStorage
  public cleanScores() : void {
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



