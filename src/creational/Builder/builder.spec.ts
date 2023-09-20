import { describe, it } from '@jest/globals';
import HouseBuilder from './HouseBuilder';
import House, { ROOF_TYPES } from './House';
import Director from './Director';

describe('Creational -> Builder Design pattern', () => {
  it('Should be able to create a new custom house', () => {
    const builder: HouseBuilder = new HouseBuilder();
    const defaultHouse: House = builder
      .setRoof(ROOF_TYPES.SALTBOX)
      .setGarage(true)
      .setFloors(2);

    expect(defaultHouse).toMatchObject({
      floors: 2,
      garage: true,
      roofType: ROOF_TYPES.SALTBOX,
      rooms: 3,
      swimmingPool: false,
      garden: false,
    });
  });

  it('Should be able to create a new house using builder', () => {
    const builder: HouseBuilder = new HouseBuilder();
    const defaultHouse: House = builder.build();

    expect(defaultHouse).toMatchObject({
      floors: 1,
      garage: false,
      garden: false,
      roofType: 'flat',
      rooms: 3,
      swimmingPool: false,
    });
  });

  it('Should be able to create a large house using Director', () => {
    const builder: HouseBuilder = new HouseBuilder();
    const director: Director = new Director(builder);
    const largeHouse: House = director.makeLargeHouse();

    expect(largeHouse).toMatchObject({
      floors: 2,
      garage: true,
      garden: true,
      roofType: 'saltbox',
      rooms: 6,
      swimmingPool: true,
    });
  });
});
