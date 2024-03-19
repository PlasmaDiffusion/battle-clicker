import { Component, OnInit, Input } from '@angular/core';
import { Building } from '../building';
import { ClickerComponent } from '../clicker/clicker.component';

@Component({
  selector: 'app-building-button',
  standalone: true,
  imports: [ClickerComponent],
  templateUrl: './building-button.component.html',
  styleUrl: './building-button.component.scss',
})
export class BuildingButtonComponent {
  @Input() building: Building;
  @Input() gold: number;
  @Input() onBuy: (building: Building) => void;

  constructor() {
    this.building = { name: '', price: 0, owned: 0, goldPerSecond: 0 };
    this.gold = 0;
    this.onBuy = (building) => {};
  }

  onClick() {
    if (this.gold > this.building.price) {
      this.onBuy(this.building);
    }
  }
}
