export interface IPizza {
  name: string;

  addSauce(): void;

  makeCrust(): void;

  addTopping(): void;
}

export default abstract class Pizza implements IPizza {
  name: string;

  protected constructor(name: string) {
    this.name = name;
  }

  abstract addSauce(): void;

  abstract makeCrust(): void;

  abstract addTopping(): void;
}
