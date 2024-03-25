import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Building } from '../building';

@Component({
  selector: 'app-building-button',
  standalone: true,
  imports: [],
  templateUrl: './building-button.component.html',
  styleUrl: './building-button.component.scss',
})
export class BuildingButtonComponent {
  @Input() building: Building;
  @Input() gold: number;
  @Output() onBuy = new EventEmitter<Building>();

  constructor() {
    this.building = { name: '', price: 0, owned: 0, goldPerSecond: 0, attackPower: 0, attackElement: 0 };
    this.gold = 0;
  }

  onClick() {
    if (this.gold >= this.building.price) {
      this.onBuy.emit(this.building);
    }
  }
}
