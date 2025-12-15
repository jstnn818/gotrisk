import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { PlayerSelect } from '../../Components/PlayerSelect/player-select.component'

@Component({
  selector: 'game-page',
  imports: [PlayerSelect, FormsModule],
  templateUrl: './game-page.component.html',
  styleUrl: './game-page.component.scss'
})
export class GamePage {
  public prevPlayerCount: number = 1;
  public playerCount: number = 1;
  public factions = [
    'Targaryen',
    'Baratheon',
    'Stark',
    'Lannister',
    'Tyrell'
  ];
  private currentSelections: Set<string>;
  private indexToFaction: Map<number, string>;
  constructor() {
    this.currentSelections = new Set();
    this.indexToFaction = new Map<number, string>();
  }

  computeRange(n: number) {
    return Array.from({ length: n }, (_, i) => i + 1)
  }

  handlePlayerCountChange() {
    if (this.playerCount < this.prevPlayerCount) {
      for (let i: number = Number(this.playerCount) + 1; i <= this.prevPlayerCount; i++) {
        const selection = this.indexToFaction.get(i);
        if (selection) {
          this.currentSelections.delete(selection)
          this.indexToFaction.delete(i);
        };
      }
    }
    this.prevPlayerCount = this.playerCount;
  }

  onSelect = (playerNumber: number, prevSelection: string, newSelection: string) => {
    if (prevSelection) this.currentSelections.delete(prevSelection);
    this.currentSelections.add(newSelection);
    this.indexToFaction.set(playerNumber, newSelection);
  }

  filterChoices = (current: string, choices: string[]) => {
    return choices.filter((choice) => !this.currentSelections.has(choice) || choice === current);
  }
}
