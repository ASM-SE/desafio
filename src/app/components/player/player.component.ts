import { Component, Input } from '@angular/core';
import { translations } from '../../shared/services/translations.service';

import { Player } from '../../schemas/player.schema';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent {

  @Input() public player : Player;

  private btnBack : string = translations.buttons.back;

}
