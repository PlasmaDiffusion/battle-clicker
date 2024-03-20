import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GameComponent } from './game/game.component';
import { AskToUseCookiesComponent } from './ask-to-use-cookies/ask-to-use-cookies.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GameComponent, AskToUseCookiesComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'catacombs-clicker';
}
