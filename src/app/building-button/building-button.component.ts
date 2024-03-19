import { Component, OnInit, Input } from '@angular/core';
import { Building } from '../building';
import { ClickerComponent } from '../clicker/clicker.component';

@Component({
  selector: 'app-building-button',
  standalone: true,
  imports: [ClickerComponent],
  templateUrl: './building-button.component.html',
  styleUrl: './building-button.component.scss'
})
export class BuildingButtonComponent {


 @Input() building: Building;
 @Input() gold: number;


 constructor(){
  this.building = {name:'', price: 0, owned: 0};
  this.gold = 0;
 }

 onClick()
 {
  //If can buy (TODO: Check gold value from clicker class)
   
  //Buy and up the price
  let price = this.building.price;
  let owned = ++this.building.owned;
  this.building.price = Math.round(price * ( 1 + (owned/10))); 
 }

}
