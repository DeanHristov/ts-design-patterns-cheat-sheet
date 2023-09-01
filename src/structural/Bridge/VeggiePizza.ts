import Pizza from './Pizza';

export default class VeggiePizza extends Pizza {
  constructor(name: string) {
    super(name);
  }

  addSauce(): void {}

  addTopping(): void {}

  makeCrust(): void {}
}
