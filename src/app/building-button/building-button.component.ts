import { Component, OnInit, Input } from '@angular/core';
import { Building } from '../building';

@Component({
  selector: 'app-building-button',
  standalone: true,
  imports: [],
  templateUrl: './building-button.component.html',
  styleUrl: './building-button.component.scss'
})
export class BuildingButtonComponent {


 @Input() building: Building;


 constructor(){
  this.building = {name:'', price: 0, owned: 0};
 }

}
