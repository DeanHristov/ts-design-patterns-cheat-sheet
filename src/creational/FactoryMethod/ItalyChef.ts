import ChefCreator, { IBurger } from './ChefCreator';
import VeggieBurger from './VeggieBurger';

// Concrete creator 2
export default class ItalyChef extends ChefCreator {
  protected factoryMethod(): IBurger {
    return new VeggieBurger('VeggieBurger');
  }
}
