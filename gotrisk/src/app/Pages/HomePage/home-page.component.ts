import { Component } from '@angular/core';

import { PlayerInfo } from '../../Components/PlayerInfo/player-info.component';

@Component({
  selector: 'home-page',
  imports: [PlayerInfo],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePage {
}
