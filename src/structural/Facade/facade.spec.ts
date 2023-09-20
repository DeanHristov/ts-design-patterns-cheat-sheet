import { describe, it } from '@jest/globals';
import HouseFacade from './HouseFacade';

describe('Structural -> Facade Design pattern', () => {
  it('Should be able to coming in the house', () => {
    const house: HouseFacade = new HouseFacade();

    expect(house.comingIn()).toEqual('The house is not empty');
  });
  it('Should be able to leaving the house', () => {
    const house: HouseFacade = new HouseFacade();

    expect(house.goingOut()).toEqual('The house is empty');
  });
});
