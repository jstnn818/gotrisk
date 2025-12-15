import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { PlayerInfo } from '../../Components/PlayerInfo/player-info.component';

@Component({
  selector: 'home-page',
  imports: [RouterLink, PlayerInfo],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePage {
}
