import { Component } from '@angular/core';

@Component({
  selector: 'app-clicker',
  standalone: true,
  imports: [],
  templateUrl: './clicker.component.html',
  styleUrl: './clicker.component.scss'
})
export class ClickerComponent {

  public gold : number = 0;

  public clickChest()
  {
    this.gold+=1;
  }
}
