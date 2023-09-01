import Pizza from './Pizza';

export interface IRestaurant {
  deliver(): string;
}

export default abstract class Restaurant implements IRestaurant {
  protected pizza: Pizza;

  protected constructor(pizza: Pizza) {
    this.pizza = pizza;
  }

  public abstract deliver(): string;
}
