import HouseBuilder from './HouseBuilder';

export enum ROOF_TYPES {
  FLAT = 'flat',
  SALTBOX = 'saltbox',
}

export interface IHouse {
  garage: boolean;
  swimmingPool: boolean;
  garden: boolean;
  rooms: number;
  floors: number;
  roofType: ROOF_TYPES;
}

export default class House implements IHouse {
  floors: number;
  garage: boolean;
  garden: boolean;
  roofType: ROOF_TYPES;
  rooms: number;
  swimmingPool: boolean;

  constructor(builder: HouseBuilder) {
    this.floors = builder.floors;
    this.garage = builder.garage;
    this.garden = builder.garden;
    this.roofType = builder.roofType;
    this.rooms = builder.rooms;
    this.swimmingPool = builder.swimmingPool;
  }
}
