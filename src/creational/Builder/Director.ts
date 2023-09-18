import HouseBuilder from './HouseBuilder';
import House, { ROOF_TYPES } from './House';

export default class Director {
  private readonly builder: HouseBuilder;

  constructor(builder: HouseBuilder) {
    this.builder = builder;
  }

  makeDefaultHouse(): House {
    return this.builder.build();
  }

  makeLargeHouse(): House {
    return this.builder
      .setGarage(true)
      .setSwimmingPool(true)
      .setGarden(true)
      .setFloors(2)
      .setRooms(6)
      .setRoof(ROOF_TYPES.SALTBOX)
      .build();
  }
}
