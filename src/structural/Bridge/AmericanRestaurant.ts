import Restaurant from './Restaurant';
import Pizza from './Pizza';

export default class AmericanRestaurant extends Restaurant {
  constructor(pizza: Pizza) {
    super(pizza);
  }

  deliver(): string {
    this.pizza.makeCrust();
    this.pizza.addSauce();
    return `Deliver a pizza (${this.pizza.name}) from American restaurant`;
  }
}
