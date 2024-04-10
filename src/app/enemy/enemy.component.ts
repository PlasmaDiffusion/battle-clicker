import { Component, Input } from '@angular/core';
import { Enemy } from '../enemy';
import { Building, Elements } from '../building';
import { CookieService } from 'ngx-cookie-service';
import { enemyDatabase } from './enemyDatabase';
import { NgFor, NgIf, NgStyle } from '@angular/common';

@Component({
  selector: 'app-enemy',
  standalone: true,
  imports: [NgIf, NgStyle, NgFor],
  templateUrl: './enemy.component.html',
  styleUrl: './enemy.component.scss',
})
export class EnemyComponent {
  currentEnemy: Enemy;
  currentEnemyIndex: number;
  currentEnemyIsPoisoned: boolean;
  currentEnemyMaxHp: number;
  moneyJustEarned: number;

  enemyList: Enemy[];

  @Input({ required: true }) heroesInBattle: Building[];
  damageJustDealt: number[];
  damageIconPaths: string[];

  constructor(private cookieService: CookieService) {
    this.enemyList = [...enemyDatabase];

    this.currentEnemyIndex =
      parseInt(this.cookieService.get('currentEnemyIndex')) || 0;
    this.currentEnemy = this.enemyList[this.currentEnemyIndex];
    this.currentEnemyIsPoisoned = false;
    this.currentEnemyMaxHp = this.currentEnemy.hp;
    this.heroesInBattle = [];
    this.moneyJustEarned = 0;

    //Damage splash text aka variable to show damage feedback when attacking
    this.damageJustDealt = [0, 0, 0, 0];
    this.damageIconPaths = [
      '../../assets/images/icons/Sword.png',
      '../../assets/images/icons/Icicle.png',
      '../../assets/images/icons/Holy.png',
      '../../assets/images/icons/Shuriken.png',
    ];

    this.attackEnemyEveryFewSeconds();
  }

  //Automatically attack based on heroes bought (from buildingList.ts)
  attackEnemyEveryFewSeconds() {
    //Warrior
    setInterval(() => {
      this.attackEnemy(this.heroesInBattle[0]);
    }, 5000);

    //Wizard
    setInterval(() => {
      this.attackEnemy(this.heroesInBattle[1]);
    }, 8000);

    //Cleric
    setInterval(() => {
      this.attackEnemy(this.heroesInBattle[2]);
    }, 7000);

    //Ninja
    setInterval(() => {
      this.attackEnemy(this.heroesInBattle[3]);
    }, 3000);

    //Poison status
    setInterval(() => {
      if (this.currentEnemyIsPoisoned && this.currentEnemy.hp > 0) {
        this.currentEnemy.hp -= Math.floor(this.currentEnemyMaxHp * 0.005);
        if (this.currentEnemy.hp < 0) {
          this.currentEnemy.hp = 0;
        }
      }
    }, 500);
  }

  //A specific hero type damages an enemy here
  attackEnemy(attackingHero: Building) {
    if (this.currentEnemy.hp > 0) {
      if (attackingHero.owned <= 0) {
        return;
      }

      let damage =
        attackingHero.attackPower *
        attackingHero.owned *
        (this.currentEnemy.weakness === attackingHero.attackElement ? 2 : 1);

      damage = this.checkForHolyMultiplier(attackingHero, damage);
      this.currentEnemy.hp -= damage;

      this.checkToPoison(attackingHero);

      //Keep hp at 0 when dead
      this.currentEnemy.hp = Math.max(this.currentEnemy.hp, 0);

      //Show feedback
      this.damageJustDealt[attackingHero.attackElement] = damage;
      setTimeout(() => {
        this.damageJustDealt[attackingHero.attackElement] = 0;
      }, 2000);
    }
  }

  //Clerics are normally weak but can deal 10x the damage against undead enemies
  checkForHolyMultiplier(attackingHero: Building, damage: number) {
    if (
      this.currentEnemy.weakness === Elements.HOLY &&
      attackingHero.attackElement === Elements.HOLY
    ) {
      damage *= 5;
    }
    return damage;
  }

  //Ninjas can poison an enemy dealing 1 damage every second
  checkToPoison(attackingHero: Building) {
    if (attackingHero.attackElement === Elements.POISON) {
      //Normal enemies have a 1/10 chance to be poisoned, and those weak against poison have a 1/2 chance.
      const rndInt = Math.floor(Math.random() * 10) + 1;

      if (
        rndInt === 10 ||
        (this.currentEnemy.weakness === Elements.POISON && rndInt > 5)
      ) {
        this.currentEnemyIsPoisoned = true;
      }
    }
  }

  //Click to claim gold of a defeated monster, then move onto the next enemy
  claimGold() {
    //todo: increase gold from game component
    this.moneyJustEarned = this.currentEnemy.goldDropped;

    this.currentEnemyIndex++;
    if (this.currentEnemyIndex >= this.enemyList.length) {
      this.currentEnemyIndex = 0;
    }

    this.currentEnemy = this.enemyList[this.currentEnemyIndex];
    this.currentEnemyIsPoisoned = false;
    this.currentEnemyMaxHp = this.currentEnemy.hp;

    if (this.cookieService.get('cookiesAccepted')) {
      this.cookieService.set(
        'currentEnemyIndex',
        this.currentEnemyIndex.toString()
      );
    }

    setTimeout(() => {
      this.moneyJustEarned = 0;
    }, 5000);
  }
}
