import Restaurant from './Restaurant';
import Pizza from './Pizza';

export default class ItalianRestaurant extends Restaurant {
  constructor(pizza: Pizza) {
    super(pizza);
  }

  deliver(): string {
    this.pizza.makeCrust();
    this.pizza.addTopping();
    return `Deliver a pizza (${this.pizza.name}) from Italian restaurant`;
  }
}
