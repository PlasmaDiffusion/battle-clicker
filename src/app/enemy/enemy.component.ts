import { Component, Input } from '@angular/core';
import { Enemy } from '../enemy';
import { Building, Elements } from '../building';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-enemy',
  standalone: true,
  imports: [],
  templateUrl: './enemy.component.html',
  styleUrl: './enemy.component.scss',
})
export class EnemyComponent {
  currentEnemy: Enemy;
  currentEnemyIndex: number;
  currentEnemyIsPoisoned: boolean;

  enemyList: Enemy[];

  @Input() heroesInBattle: Building[];

  constructor(private cookieService: CookieService) {
    this.enemyList = [
      { name: 'Cockatrice', hp: 100, goldDropped: 50, weakness: Elements.NONE },
      { name: 'Cobra', hp: 150, goldDropped: 100, weakness: Elements.ICE },
      { name: 'Scorpion', hp: 200, goldDropped: 150, weakness: Elements.ICE },
      { name: 'Spider', hp: 300, goldDropped: 200, weakness: Elements.ICE },
      {
        name: 'Blood Skeleton',
        hp: 400,
        goldDropped: 100,
        weakness: Elements.HOLY,
      },
      {
        name: 'Centipede',
        hp: 500,
        goldDropped: 250,
        weakness: Elements.POISON,
      },
      { name: 'Zombie', hp: 600, goldDropped: 200, weakness: Elements.HOLY },
      {
        name: 'Cursed Plant',
        hp: 800,
        goldDropped: 500,
        weakness: Elements.POISON,
      },
      { name: 'Mummy', hp: 1000, goldDropped: 500, weakness: Elements.HOLY },
      {
        name: 'Dark Knight',
        hp: 1200,
        goldDropped: 1000,
        weakness: Elements.POISON,
      },
      {
        name: 'Guardian',
        hp: 2000,
        goldDropped: 5000,
        weakness: Elements.NONE,
      },
    ];

    this.currentEnemyIndex =
      parseInt(this.cookieService.get('currentEnemyIndex')) || 0;
    this.currentEnemy = this.enemyList[this.currentEnemyIndex];
    this.currentEnemyIsPoisoned = false;

    this.heroesInBattle = [];
  }

  //Automatically attack based on heroes bought (from buildingList.ts)
  attackEnemyEveryFewSeconds() {
    //Warrior
    setInterval(() => {
      this.attackEnemy(this.heroesInBattle[0]);
    }, 2000);
  }

  //A specific hero type damages an enemy here
  attackEnemy(attackingHero: Building) {
    if (this.currentEnemy.hp > 0) {
      this.currentEnemy.hp -=
        attackingHero.attackPower *
        attackingHero.owned *
        (this.currentEnemy.weakness === attackingHero.attackElement ? 1 : 2);

      this.checkToPoison(attackingHero);
    }
  }

  checkToPoison(attackingHero: Building)
  {
      //Ninjas can poison an enemy dealing 1 damage every second
      if (attackingHero.attackElement === Elements.POISON) {

        //Normal enemies have a 1/6 chance to be poisoned, and those weak against poison have a 1/2 chance.
        const rndInt = Math.floor(Math.random() * 6) + 1;
        
        if (
          rndInt === 6 ||
          (this.currentEnemy.weakness === Elements.POISON && rndInt > 3)
        ) {
        }
      }
  }

  //Click to claim gold of a defeated monster, then move onto the next enemy
  claimGold() {}
}
