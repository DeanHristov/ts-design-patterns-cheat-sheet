import { describe, it } from '@jest/globals';
import ItalyChef from './creators/ItalyChef';
import AmericanChef from './creators/AmericanChef';
import { IBurger } from './ChefCreator';

describe('Creational -> Factory method Design pattern', () => {
  it('Should be able to cook a beef burger from an American chef', () => {
    const americanChef: AmericanChef = new AmericanChef();
    const beefBurger: IBurger = americanChef.cookBurger();

    expect(beefBurger).toEqual({ burgerName: 'BeefBurger' });
  });

  it('Should be able to cook a veggie burger from an Italian chef', () => {
    const italyChef: ItalyChef = new ItalyChef();

    const veggieBurger: IBurger = italyChef.cookBurger();

    expect(veggieBurger).toEqual({ burgerName: 'VeggieBurger' });
  });
});
