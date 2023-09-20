// Concrete product 2
import { IBurger } from './ChefCreator';

export default class BeefBurger implements IBurger {
  burgerName: string;

  constructor(burgerName: string) {
    this.burgerName = burgerName;
  }
}
