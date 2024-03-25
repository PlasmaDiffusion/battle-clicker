export interface Building {
    name: string,
    owned: number,
    price: number,

    goldPerSecond: number,
    attackPower: number,
    attackElement: Elements;
}

export enum Elements{
    NONE,
    ICE,
    HOLY,
    POISON
}