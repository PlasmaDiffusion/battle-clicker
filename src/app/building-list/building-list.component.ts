import { Component, Input, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { Building } from '../building';
import { BuildingButtonComponent } from '../building-button/building-button.component';

const buildings: Building[] = [
  { name: 'Warrior', owned: 0, price: 20 },
  { name: 'Wizard', owned: 0, price: 100 },
  { name: 'Cleric', owned: 0, price: 500 },
  { name: 'Thief', owned: 0, price: 2000 },
];

@Component({
  selector: 'app-building-list',
  standalone: true,
  imports: [NgFor, BuildingButtonComponent],
  templateUrl: './building-list.component.html',
  styleUrl: './building-list.component.scss',
})
export class BuildingListComponent {


  @Input() gold: number = 0;
   buildings: Building[] = buildings;
}
