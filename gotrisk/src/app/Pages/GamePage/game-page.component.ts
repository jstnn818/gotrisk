import { Component } from '@angular/core';

import { PlayerInfo } from '../../Components/PlayerInfo/player-info.component';

@Component({
  selector: 'game-page',
  imports: [PlayerInfo],
  templateUrl: './game-page.component.html',
  styleUrl: './game-page.component.scss'
})
export class GamePage {
}
