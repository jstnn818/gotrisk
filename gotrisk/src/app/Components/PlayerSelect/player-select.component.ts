import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'player-select',
  imports: [FormsModule],
  templateUrl: './player-select.component.html',
  styleUrl: './player-select.component.scss'
})
export class PlayerSelect {
  @Input({ required: true }) playerNumber!: number;
  @Input({ required: true }) factions: string[] = [];
  @Input({ required: false }) onSelect: (playerNumber: number, prevSelection: string, newSelection: string) => void = (playerNumber, prevSelection, newSelection) => {};
  @Input({ required: false }) filterChoices: (current: string, choices: string[]) => string[] = (current, choices) => {return choices};

  @Output() selectFactionEvent = new EventEmitter<string>();
  @Output() selectNameEvent = new EventEmitter<string>();

  public prevPlayerFaction = '';
  public playerFaction = '';
  public playerName = '';

  handleFactionChange() {
    this.onSelect(this.playerNumber, this.prevPlayerFaction, this.playerFaction);
    this.prevPlayerFaction = this.playerFaction;
    this.selectFactionEvent.emit(this.playerFaction);
  }

  retrieveSelections() {
    return this.filterChoices(this.playerFaction, this.factions);
  }
}