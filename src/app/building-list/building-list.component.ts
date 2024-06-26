import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgFor } from '@angular/common';
import { Building, Elements } from '../building';
import { BuildingButtonComponent } from './building-button/building-button.component';
import { CookieService } from 'ngx-cookie-service';
import { EnemyComponent } from '../enemy/enemy.component';
import { baseBuildings } from './buildingDatabase';

//Stores buildings, renders a list of them, and handles code to buy a building
@Component({
  selector: 'app-building-list',
  standalone: true,
  templateUrl: './building-list.component.html',
  styleUrl: './building-list.component.scss',
  imports: [NgFor, BuildingButtonComponent, EnemyComponent],
})
export class BuildingListComponent {
  @Input() gold: number = 0;
  @Output() onUpdateGold = new EventEmitter<number>();

  buildings: Building[];

  constructor(private cookieService: CookieService) {
    this.generateGoldFromBuildings();
    this.saveBuildings();

    this.buildings = baseBuildings;

    let buildingCookie = cookieService.get('Buildings');
    if (buildingCookie) {
      let loadedBuildings: Building[] = JSON.parse(buildingCookie);
      this.buildings = [...loadedBuildings];
    }
  }

  //Buy a building and up the price
  buyBuilding(building: Building) {
    let indexToBuy = 0;
    this.buildings.forEach((currentBuilding, currentIndex) => {
      if (building.name === currentBuilding.name) {
        indexToBuy = currentIndex;
      }
    });

    this.onUpdateGold.emit(this.gold - building.price);
    this.buildings[indexToBuy].owned++;

    let price = this.buildings[indexToBuy].price;
    let owned = this.buildings[indexToBuy].owned;
    this.buildings[indexToBuy].price = Math.round(price * (1 + owned / 10));
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

  saveBuildings() {
    setInterval(() => {
      if (this.cookieService.get('cookiesAccepted')) {
        this.cookieService.set('Buildings', JSON.stringify(this.buildings));
      }
    }, 6000);
  }

  claimChest($amount: number) {
    this.onUpdateGold.emit(this.gold + $amount);
  }
}
