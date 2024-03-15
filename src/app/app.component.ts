import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClickerComponent } from './clicker/clicker.component';
import { BuildingListComponent } from './building-list/building-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ClickerComponent, BuildingListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'catacombs-clicker';
}
