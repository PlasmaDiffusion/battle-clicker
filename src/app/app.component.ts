import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GameComponent } from './game/game.component';
import { CookiesComponent } from './cookies/cookies.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GameComponent, CookiesComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'catacombs-clicker';
}
