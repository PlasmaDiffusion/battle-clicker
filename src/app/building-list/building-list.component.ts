import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { Building } from '../building';
import { BuildingButtonComponent } from '../building-button/building-button.component';

@Component({
  selector: 'app-building-list',
  standalone: true,
  imports: [NgFor, BuildingButtonComponent],
  templateUrl: './building-list.component.html',
  styleUrl: './building-list.component.scss',
})
export class BuildingListComponent {
  public buildings: Building[] = [];
}
