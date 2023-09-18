import House, { IHouse, ROOF_TYPES } from './House';

export default class HouseBuilder implements IHouse {
  floors: number;
  garage: boolean;
  rooms: number;
  roofType: ROOF_TYPES;
  swimmingPool: boolean;
  garden: boolean;

  constructor() {
    this.floors = 1;
    this.garage = false;
    this.roofType = ROOF_TYPES.FLAT;
    this.rooms = 3;
    this.swimmingPool = false;
    this.garden = false;
  }

  setFloors(floors: number) {
    this.floors = floors;
    return this;
  }

  setGarage(garage: boolean) {
    this.garage = garage;
    return this;
  }

  setRooms(countRooms: number) {
    this.rooms = countRooms;
    return this;
  }

  setRoof(roofType: ROOF_TYPES) {
    this.roofType = roofType;
    return this;
  }

  setSwimmingPool(shouldHave: boolean) {
    this.swimmingPool = shouldHave;
    return this;
  }

  setGarden(garden: boolean) {
    this.garden = garden;
    return this;
  }

  build(): House {
    return new House(this);
  }
}
