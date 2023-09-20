// Concrete product 1
import { IBurger } from './ChefCreator';

export default class VeggieBurger implements IBurger {
  burgerName: string;

  constructor(burgerName: string) {
    this.burgerName = burgerName;
  }
}
