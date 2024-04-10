import { Building, Elements } from "../building";

//Hard coded list of buildings including the base price
export const baseBuildings: Building[] = [
    {
      name: 'Warrior',
      owned: 0,
      price: 10,
      goldPerSecond: 1,
      attackPower: 3,
      attackElement: Elements.NONE,
      description: 'A basic fighter that hits things with a sword. (+1 Gold Per Second)',
    },
    {
      name: 'Wizard',
      owned: 0,
      price: 100,
      goldPerSecond: 1,
      attackPower: 6,
      attackElement: Elements.ICE,
      description: 'Cast ice spells effective against animals or arachnids. (+1 Gold Per Second)',
    },
    {
      name: 'Cleric',
      owned: 0,
      price: 500,
      goldPerSecond: 1,
      attackPower: 2,
      attackElement: Elements.HOLY,
      description: 'Weak fighters but they deal large damage to the undead. (+1 Gold Per Second)',
    },
    {
      name: 'Ninja',
      owned: 0,
      price: 2500,
      goldPerSecond: 2,
      attackPower: 3,
      attackElement: Elements.POISON,
      description: 'Quick fighters that can poison enemies with their shurikens, dealing constant damage. (+2 Gold Per Second)',
    },
  ];