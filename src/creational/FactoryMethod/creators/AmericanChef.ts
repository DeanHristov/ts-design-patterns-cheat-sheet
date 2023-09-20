import ChefCreator, { IBurger } from "../ChefCreator";
import BeefBurger from "../products/BeefBurger";

// Concrete creator 1
export default class AmericanChef extends ChefCreator {
  protected factoryMethod(): IBurger {
    return new BeefBurger('BeefBurger');
  }
}
