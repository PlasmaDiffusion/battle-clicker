import { Elements } from '../building';

export const enemyDatabase = [
  { name: 'Cockatrice', hp: 100, goldDropped: 50, weakness: Elements.POISON },
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
    goldDropped: 300,
    weakness: Elements.POISON,
  },
  { name: 'Mummy', hp: 1000, goldDropped: 500, weakness: Elements.HOLY },
  {
    name: 'Dark Knight',
    hp: 8000,
    goldDropped: 3000,
    weakness: Elements.HOLY,
  },
  {
    name: 'Guardian',
    hp: 20000,
    goldDropped: 9000,
    weakness: Elements.POISON,
  },
];
