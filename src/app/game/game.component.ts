import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BuildingListComponent } from '../building-list/building-list.component';
import { ClickerComponent } from '../clicker/clicker.component';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [RouterOutlet, ClickerComponent, BuildingListComponent],
  template: `
    <div class="game">
      <app-clicker [gold]="this.gold" />
      <app-building-list [gold]="this.gold" />
    </div>
  `,
  styleUrl: './game.component.scss',
})
export class GameComponent {

  public gold : number;

  constructor() {
    this.gold = 0;
  }

}
