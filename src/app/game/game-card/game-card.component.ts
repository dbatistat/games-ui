import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Game} from "../game.interfaces";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-game-card',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './game-card.component.html',
  styleUrl: './game-card.component.scss'
})
export class GameCardComponent {
  @Input() game?: Game;
  @Output() selected = new EventEmitter<Game>();

  gameSelected(): void {
    this.selected.emit(this.game)
  }
}
