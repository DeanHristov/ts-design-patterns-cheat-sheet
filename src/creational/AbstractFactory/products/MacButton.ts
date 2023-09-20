import { IButton } from "../FactoryCreator";

// Concrete product 1
export default class MacButton implements IButton {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  click(): string {
    return `Trigger click on a "${this.name}" button`;
  }
}
