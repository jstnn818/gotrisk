import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { PlayerSelect } from '../../Components/PlayerSelect/player-select.component'


interface PlayerInfo {
  name: string,
  faction: string
}

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
  private playerList: Array<PlayerInfo>;
  constructor() {
    this.currentSelections = new Set();
    this.playerList = [{ name: '', faction: ''}];
  }

  computeRange(n: number) {
    return Array.from({ length: n }, (_, i) => i + 1)
  }

  handlePlayerCountChange() {
    if (this.playerCount < this.prevPlayerCount) {
      for (let i: number = Number(this.prevPlayerCount) - 1; i >= this.playerCount; i--) {
        const selection = this.playerList.pop()?.faction;
        if (selection) {
          this.currentSelections.delete(selection)
        };
      }
      this.playerList.slice(0, this.playerCount);
    } else {
      for (let i: number = Number(this.prevPlayerCount); i < Number(this.playerCount); i++) {
        this.playerList.push({
          name: '',
          faction: ''
        })
      }
    }
    this.prevPlayerCount = this.playerCount;
  }

  onSelect = (playerNumber: number, prevSelection: string, newSelection: string) => {
    if (prevSelection) this.currentSelections.delete(prevSelection);
    this.currentSelections.add(newSelection);
    this.playerList[playerNumber - 1].faction = newSelection;
  }

  handlePlayerNameChange(playerInfo: {name: string, number: number}) {
    this.playerList[playerInfo.number - 1].name = playerInfo.name;
  }

  filterChoices = (current: string, choices: string[]) => {
    return choices.filter((choice) => !this.currentSelections.has(choice) || choice === current);
  }
}
