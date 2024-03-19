import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  @Output() onBuy = new EventEmitter<Building>();

  constructor() {
    this.building = { name: '', price: 0, owned: 0, goldPerSecond: 0 };
    this.gold = 0;
    console.log("sdfds");
  }

  onClick() {
    console.log("clicked", this.building.name);
    console.log(this.gold, ">", this.building.price);
    if (this.gold > this.building.price) {
      this.onBuy.emit(this.building);
    }
  }
}
