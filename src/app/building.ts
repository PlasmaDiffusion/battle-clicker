export interface Building {
    name: string,
    owned: number,
    price: number,

    goldPerSecond: number,
    attackPower: number,
    attackElement: Elements;

    description: string;
}

export enum Elements{
    NONE,
    ICE,
    HOLY,
    POISON
}