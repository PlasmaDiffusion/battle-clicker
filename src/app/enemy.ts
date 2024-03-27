import { Elements } from "./building";

export interface Enemy {
  name: string;
  hp: number;
  goldDropped: number;
  weakness: Elements;
}
