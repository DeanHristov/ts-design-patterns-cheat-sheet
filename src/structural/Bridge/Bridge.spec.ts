import { describe, it } from '@jest/globals';
import AmericanRestaurant from './AmericanRestaurant';
import PepperoniPizza from './PepperoniPizza';
import ItalianRestaurant from './ItalianRestaurant';
import VeggiePizza from './VeggiePizza';

describe('Structural -> Bridge pattern', () => {
  it('Should be able to deliver a Pepperoni pizza from an American restaurant ', () => {
    const outputMessage = `Deliver a pizza (Pepperoni) from American restaurant`;
    const americanRestaurant: AmericanRestaurant = new AmericanRestaurant(
      new PepperoniPizza('Pepperoni'),
    );

    expect(americanRestaurant.deliver()).toMatch(outputMessage);
  });

  it('Should be able to deliver a Veggie pizza from an Italian restaurant ', () => {
    const outputMessage = 'Deliver a pizza (Veggie) from Italian restaurant';
    const italianRestaurant: ItalianRestaurant = new ItalianRestaurant(
      new VeggiePizza('Veggie'),
    );

    expect(italianRestaurant.deliver()).toMatch(outputMessage);
  });
});
