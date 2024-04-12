import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BuildingListComponent } from '../building-list/building-list.component';
import { ClickerComponent } from '../clicker/clicker.component';
import { CookieService } from 'ngx-cookie-service';

//Contains management for gold currency and renders all major game related components
@Component({
  selector: 'app-game',
  standalone: true,
  imports: [RouterOutlet, ClickerComponent, BuildingListComponent],
  template: `
    <div class="game">
      <app-clicker
        [gold]="this.gold"
        (onUpdateGold)="this.onUpdateGold($event)"
      />
      <app-building-list
        [gold]="this.gold"
        (onUpdateGold)="this.onUpdateGold($event)"
      />
    </div>
  `,
  styleUrl: './game.component.scss',
})
export class GameComponent {
  public gold: number;

  constructor(private cookieService: CookieService) {
    const goldCookie = cookieService.get('Gold');
    this.gold = parseInt(goldCookie) || 0;
    this.saveGold();
  }

  onUpdateGold($amount: number) {
    this.gold = $amount;
  }

  saveGold() {
    setInterval(() => {
      if (this.cookieService.get('cookiesAccepted')) {
        this.cookieService.set('Gold', this.gold.toString());
      }
    }, 6000);
  }
}
