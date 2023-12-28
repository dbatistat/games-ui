import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgIf, NgOptimizedImage} from "@angular/common";
import {Game, GameDetail} from "../game.interfaces";

@Component({
  selector: 'app-game-detail',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgIf
  ],
  templateUrl: './game-detail.component.html',
  styleUrl: './game-detail.component.scss'
})
export class GameDetailComponent {
  @Output() goBack = new EventEmitter<void>;

  @Input() game?: GameDetail;

  onGoBack(): void {
    this.goBack.emit()
  }
}
