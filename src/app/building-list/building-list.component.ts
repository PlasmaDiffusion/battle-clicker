import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgFor } from '@angular/common';
import { Building } from '../building';
import { BuildingButtonComponent } from '../building-button/building-button.component';

//Hard coded list of buildings here
const buildings: Building[] = [
  { name: 'Warrior', owned: 0, price: 10, goldPerSecond: 1 },
  { name: 'Wizard', owned: 0, price: 100, goldPerSecond: 5 },
  { name: 'Cleric', owned: 0, price: 500, goldPerSecond: 10 },
  { name: 'Thief', owned: 0, price: 2500, goldPerSecond: 50 },
];

//Stores buildings, renders a list of them, and handles code to buy a building
@Component({
  selector: 'app-building-list',
  standalone: true,
  imports: [NgFor, BuildingButtonComponent],
  templateUrl: './building-list.component.html',
  styleUrl: './building-list.component.scss',
})
export class BuildingListComponent {
  @Input() gold: number = 0;
  @Output() onUpdateGold = new EventEmitter<number>();

  buildings: Building[] = buildings;

  constructor() {
    this.generateGoldFromBuildings();
  }

  //Buy a building and up the price
  buyBuilding(building: Building) {
    let indexToBuy = 0;
    this.buildings.forEach((currentBuilding, currentIndex) => {
      if (building.name === currentBuilding.name) {
        indexToBuy = currentIndex;
      }
    });

    console.log(building);
    this.onUpdateGold.emit(this.gold - building.price);
    buildings[indexToBuy].owned++;

    let price = buildings[indexToBuy].price;
    let owned = buildings[indexToBuy].owned;
    buildings[indexToBuy].price = Math.round(price * (1 + owned / 10));
  }

  generateGoldFromBuildings() {
    setInterval(() => {
      let goldToGain = 0;
      this.buildings.forEach((building) => {
        goldToGain += building.goldPerSecond * building.owned;
      });
      this.onUpdateGold.emit(this.gold + goldToGain);
    }, 1000);
  }
}
