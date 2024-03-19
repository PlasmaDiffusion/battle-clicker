import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-clicker',
  standalone: true,
  imports: [],
  templateUrl: './clicker.component.html',
  styleUrl: './clicker.component.scss'
})
export class ClickerComponent {

  @Input() gold : number = 0;
  @Output() onUpdateGold = new EventEmitter<number>();


  clickChest()
  {
    this.onUpdateGold.emit(this.gold+1);
  }
}
