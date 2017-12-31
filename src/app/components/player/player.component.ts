import { Component, OnInit, Input } from '@angular/core';


import { Player } from '../../schemas/player.schema';


@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  @Input() public player : Player;

  constructor() { }

  ngOnInit() { }
  
  private setImage(hp : number) : string {
    if(hp >= 0){
        return "./assets/images/"+hp+".png";
    }

  }

}
