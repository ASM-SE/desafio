import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { translations } from '../../shared/services/translations.service';

@Component({
  selector: 'app-how-to-play',
  templateUrl: './how-to-play.component.html',
  styleUrls: ['./how-to-play.component.css']
})
export class HowToPlayComponent  {

  public btnBack : string = translations.buttons.back;

  constructor(private router: Router) { }

  public back() : void {
      this.router.navigate(['home']);
  }

}

