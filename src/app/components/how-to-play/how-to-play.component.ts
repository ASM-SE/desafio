import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';


import { buttonStartLabel, buttonRestartLabel, 
  buttonInstructionsLabel, buttnScoresLabel, logoImagePath } from '../../shared/services/shared.service';

@Component({
  selector: 'app-how-to-play',
  templateUrl: './how-to-play.component.html',
  styleUrls: ['./how-to-play.component.css']
})
export class HowToPlayComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public back() : void {
    this.router.navigate(['home']);
  }

}

