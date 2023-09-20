export interface IBurger {
  burgerName: string;
}

export default abstract class ChefCreator {
  cookBurger() {
    return this.factoryMethod();
  }

  protected abstract factoryMethod(): IBurger;
}
